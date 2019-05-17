import React, { Component } from 'react'
import { object, string, number, func } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import TitleForm from './TitleForm'

const styles = {
  root: {
    display: 'flex',
    cursor: 'pointer'
  },
  text: {
    cursor: 'pointer'
  }
}

class Title extends Component {

  state = {
    isEditable: false,
  }

  edit = () => {
    this.setState({ isEditable: true })
  }

  // componentDidUpdate(prev) {
  //   console.log({ Title_prevTitle: prev.title, nextTitle: this.props.title })
  // }

  save = async (form) => {
    const { room_id, onUpdate } = this.props
    await onUpdate(room_id, form)
    this.setState({ isEditable: false })
  }

  render() {
    const { classes, title } = this.props
    const { isEditable } = this.state

    console.log(title, 'child')

    if (!isEditable) {
      return (
        <Typography
          key={title}
          className={classes.text}
          variant="h6"
          onClick={this.edit}
        >
          {title || 'Назовите событие'}
        </Typography>
      )
    }

    return <TitleForm title={title} onSubmit={this.save} />

  }

}

Title.propTypes = {
  classes: object.isRequired,
  room_id: number,
  title: string,
  onUpdate: func.isRequired,
}

export default withStyles(styles)(Title)
