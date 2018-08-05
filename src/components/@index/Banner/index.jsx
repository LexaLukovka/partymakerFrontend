import React from 'react'
import Grid from '@material-ui/core/es/Grid/Grid'
import BannerTitle from '../BannerTitle'
import BannerButton from '../BannerButton'

const Banner = () =>
  <div>
    <Grid container justify="center">
      <BannerTitle />
    </Grid>
    <Grid container alignItems="center" justify="center">
      <BannerButton />
    </Grid>
  </div>

Banner.propTypes = {}

export default Banner
