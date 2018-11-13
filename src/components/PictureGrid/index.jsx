/* eslint-disable class-methods-use-this,function-paren-newline */
import React, { Component } from 'react'
import { array, func, object } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'

const styles = theme => ({
  root: {
    margin: '5px',
    display: 'grid',
    gridAutoFlow: 'dense',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '250px',
    gridGap: '5px',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
      margin: '0',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      margin: '0',
      gridGap: 0,
      gridRowGap: '5px',
    },
  },
  gridPicture: {
    borderRadius: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 5,
    },
  },
  gridVideo: {
    width: '100%',
    height: '100%',
    minHeight: 240,
  },
  oneVideo: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
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

    const videos = document.querySelectorAll('.grid-video')
    videos.forEach(async video => {
      if (videos.length === 1) {
        video.classList.add(classes.oneVideo)
      }
    })

    const pictures = document.querySelectorAll('.grid-picture')
    pictures.forEach(async avatar => {

      if (pictures.length === 1) avatar.classList.add(classes.large)
      if (pictures.length === 1 && videos.length === 0) avatar.classList.add(classes.superLarge)

      const picture = await this.primisifyPicture(avatar.querySelector('img'))
      if (picture.naturalHeight) {
        const ratio = picture.naturalWidth / picture.naturalHeight
        if (ratio > (16 / 9)) avatar.classList.add(classes.large)
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

  idVideo = (url) =>
    `https://www.youtube.com/embed/${url}`

  render() {
    const { classes, pictures, videos } = this.props
    return (
      <React.Fragment>
        <div className={classes.root}>
          {!isEmpty(pictures) && pictures.map(picture =>
            <Avatar
              alt="grid"
              key={picture}
              onClick={this.handleClick(picture)}
              src={picture}
              className={`${classes.gridPicture} grid-picture`}
            />,
          )}
          {!isEmpty(videos) && videos.map((video, index) =>
            <iframe
              key={index}
              className={`${classes.gridVideo} grid-video`}
              src={this.idVideo(video.url)}
              frameBorder="0"
              title="video"
              allowFullScreen
            />,
          )}
        </div>
      </React.Fragment>
    )
  }
}

PictureGrid.propTypes = {
  classes: object.isRequired,
  pictures: array.isRequired,
  videos: array.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(PictureGrid)
