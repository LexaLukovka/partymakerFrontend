import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import CargoForm from './CargoFilter'
import Container from '../Container'
import CargoList from './CargoList'

const CargoScene = () =>
  <Container className="mt-5">
    <Grid container justify="space-between">
      <Grid item sm={12} md={4} lg={4}>
        <CargoForm />
      </Grid>
      <Grid item md={8} xs={9} className="pl-3">
        <CargoList />
      </Grid>
    </Grid>
  </Container>

CargoScene.propTypes = {}

export default CargoScene
