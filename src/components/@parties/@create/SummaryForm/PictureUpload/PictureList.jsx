/* eslint-disable function-paren-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core'

const styles = {
  photo: {
    width: 70,
    height: 70,
    borderRadius: '5%',
    margin: 2,
  },
}

const PictureList = ({ classes, pictures }) =>
  pictures.map((img, index) =>
    <Avatar key={index} className={classes.photo} src={img} />,
  )

PictureList.propTypes = {
  classes: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
}

export default withStyles(styles)(PictureList)
