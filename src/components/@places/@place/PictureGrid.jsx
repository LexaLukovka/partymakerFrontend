/* eslint-disable class-methods-use-this,function-paren-newline */
import React, { Component } from 'react'
import { object, number, string, array, shape, func } from 'prop-types'
import { withStyles, Avatar } from '@material-ui/core'

const styles = {
  root: {
    margin: '5px',
    display: 'grid',
    gridAutoFlow: 'dense',
    gridAutoColumns: '1fr',
    gridAutoRows: '300px',
    gridGap: '5px',
  },
  gridPicture: {
    borderRadius: 0,
    width: '100%',
    height: '100%',
  },
  wide: {
    gridColumn: 'span 2',
  },
}

class PictureGrid extends Component {
  componentDidUpdate() {
    const { classes } = this.props
    const avatars = document.querySelectorAll('.grid-picture')

    avatars.forEach(avatar => {
      const picture = avatar.querySelector('img')
      if (picture.naturalHeight) {
        const ratio = picture.naturalWidth / picture.naturalHeight
        if (ratio > (16 / 9)) avatar.classList.add(classes.wide)
      }
    })
  }

  handleClick = (picture_url) => () => {
    this.props.onClick(picture_url)
  }

  render() {
    const { classes, pictures } = this.props
    return (
      <div className={classes.root}>
        {pictures.map(picture =>
          <Avatar
            alt="grid"
            key={picture}
            onClick={this.handleClick(picture)}
            src={picture}
            className={`${classes.gridPicture} grid-picture`}
          />,
        )}
      </div>
    )
  }
}

PictureGrid.propTypes = {
  classes: object.isRequired,
  pictures: array.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(PictureGrid)
