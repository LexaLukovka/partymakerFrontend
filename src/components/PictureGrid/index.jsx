/* eslint-disable class-methods-use-this,function-paren-newline */
import React, { Component } from 'react'
import { array, func, object } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    margin: '5px',
    display: 'grid',
    gridAutoFlow: 'dense',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '250px',
    gridGap: '5px',

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
      margin: '0',
    },
  },
  gridPicture: {
    borderRadius: 0,
    width: '100%',
    height: '100%',
  },
  wide: {
    gridColumn: 'span 2',
    [theme.breakpoints.down('sm')]: {
      gridColumn: 'span 4',
    },
  },
  large: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },
  superLarge: {
    gridColumn: 'span 4',
    gridRow: 'span 4',
  },
})

class PictureGrid extends Component {
  componentDidMount() {
    this.loadGrid()
  }

  componentDidUpdate() {
    this.loadGrid()
  }

  loadGrid = () => {
    const { classes } = this.props

    const avatars = document.querySelectorAll('.grid-picture')
    avatars.forEach(async avatar => {
      if (avatars.length === 1) {
        avatar.classList.add(classes.superLarge)
      }
      const picture = await this.primisifyPicture(avatar.querySelector('img'))
      if (picture.naturalHeight) {
        const ratio = picture.naturalWidth / picture.naturalHeight
        if (ratio > (16 / 9)) {
          avatar.classList.add(classes.large)
        }
      }
    })
  }

  primisifyPicture = (picture) =>
    new Promise((resolve) => {
      picture.onload = (e) => {
        resolve(e.target)
      }
    })

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
