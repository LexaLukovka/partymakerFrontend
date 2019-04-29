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

class RoomTitle extends Component {

  state = {
    isEditable: false,
    value: '',
  }

  edit = () => {
    this.setState({ isEditable: true })
  }

  save = () => {
    const { onChange, title } = this.props
    const { value } = this.state
    this.setState({ isEditable: false })
    onChange(value || title)
  }

  change = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { classes, title } = this.props
    const { isEditable, value } = this.state

    if (!isEditable) {
      return (
        <Typography
          className={classes.text}
          variant="h6"
          onClick={this.edit}
        >
          {title || 'Назовите событие'}
        </Typography>
      )
    }

    return (
      <div className={classes.root}>
        <TextField
          value={value || title}
          className={classes.field}
          onChange={this.change}
        />
        <Button size="small" variant="outlined" onClick={this.save}>Сохранить</Button>
      </div>
    )
  }

}

RoomTitle.propTypes = {
  classes: object.isRequired,
  title: string,
  onChange: func.isRequired,
}

export default withStyles(styles)(RoomTitle)
