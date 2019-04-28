import React, { Component } from 'react'
import { object, func, string } from 'prop-types'
import { Button, TextField, Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    cursor: 'pointer'
  },
  field: {
    marginRight: 5,
  },
  text: {
    cursor: 'pointer'
  }
}

class Title extends Component {

  state = {
    isEditable: false,
    value: '',
  }

  edit = () => {
    this.setState({ isEditable: true })
  }

  save = () => {
    const { onChange } = this.props
    const { value } = this.state
    this.setState({ isEditable: false })
    onChange(value)
  }

  change = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { classes, value: initialValue } = this.props
    const { isEditable, value } = this.state

    if (!isEditable) {
      return (
        <Typography
          className={classes.text}
          variant="h6"
          onClick={this.edit}
        >
          {initialValue}
        </Typography>
      )
    }

    return (
      <div className={classes.root}>
        <TextField
          value={value || initialValue}
          className={classes.field}
          onChange={this.change}
        />
        <Button size="small" variant="outlined" onClick={this.save}>Сохранить</Button>
      </div>
    )
  }

}

Title.propTypes = {
  classes: object.isRequired,
  value: string,
  onChange: func.isRequired,
}

export default withStyles(styles)(Title)
