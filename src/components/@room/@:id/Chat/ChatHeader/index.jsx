import React from 'react'
import { object, string, func } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import SetPlaceIcon from './SetPlaceIcon'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 20px',
    borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)'
  },
  titles: {
    paddingLeft: 13,
  }
}

const ChatHeader = ({ classes, title, place_title, onSetPlace }) =>
  <div className={classes.root}>
    <SetPlaceIcon onClick={onSetPlace} />
    <div className={classes.titles}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" color="textSecondary">{place_title}</Typography>
    </div>
  </div>

ChatHeader.propTypes = {
  classes: object.isRequired,
  title: string,
  place_title: string,
  onSetPlace: func.isRequired,
}
ChatHeader.defaultProps = {
  title: 'Нозовите вечеринку',
  place_title: 'Выберите место'
}

export default withStyles(styles)(ChatHeader)
