import React from 'react'
import Grid from '@material-ui/core/es/Grid/Grid'
import Background from './Background'
import Container from '../../Container'
import BannerTitle from '../BannerTitle'
import BannerButton from '../BannerButton'

const Banner = () =>
  <Background>
    <Container>
      <Grid container justify="center">
        <BannerTitle />
      </Grid>
      <Grid container alignItems="center" justify="center">
        <BannerButton />
      </Grid>
    </Container>
  </Background>

Banner.propTypes = {}

export default Banner
