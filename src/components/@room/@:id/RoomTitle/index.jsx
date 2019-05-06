import React, { Component } from 'react'
import { object, func, string, shape, number } from 'prop-types'
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
    const { room: { title } } = this.props
    this.setState({ isEditable: true, value: title })
  }

  save = () => {
    const { onChange, room: { id, title } } = this.props
    const { value } = this.state
    this.setState({ isEditable: false })

    onChange(id, { title: value || title })
  }

  change = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { classes, room: { title } } = this.props
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
          value={value}
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
  room: shape({
    id: number,
    title: string
  }),
  onChange: func.isRequired,
}

export default withStyles(styles)(RoomTitle)
