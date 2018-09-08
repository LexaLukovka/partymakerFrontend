/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Slider from 'react-slick'
import { arrayOf, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Avatar } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'

const styles = {
  root: {},
  picture: {
    width: '100%',
    height: 300,
    borderRadius: '3px',
  },
}

class Carousel extends React.Component {
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  render() {
    const { classes, pictures } = this.props
    const url = '/images/parties.jpg'
    return (
      <div className={classes.root}>
        <Slider {...this.settings}>
          {isEmpty(pictures)
            ? <Avatar className={classes.picture} src={url} />
            : pictures.map(picture => <Avatar key={picture} className={classes.picture} src={picture.url} />)}
        </Slider>
      </div>
    )
  }
}

Carousel.propTypes = {
  classes: object.isRequired,
  pictures: arrayOf(object).isRequired,
}

export default withStyles(styles)(Carousel)
