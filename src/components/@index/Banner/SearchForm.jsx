import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import { Link } from 'react-router-dom'
import Geosuggest from '../../Geosuggest'
import TransparentButton from './TransparentButton'
import Container from '../../Container'

const SearchForm = () =>
  <Container>
    <Grid container className="mt-5 mb-5 pt-5 pb-5" spacing={24} alignItems="center" justify="center">
      <Grid item md={4} lg={3}>
        <Geosuggest
          id="to"
          name="to"
          fullWidth
          label="Откуда забрать ваш груз?"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <Geosuggest
          id="from"
          name="from"
          fullWidth
          label="Куда отвезти ваш груз?"
        />
      </Grid>
      <Grid item md={3} lg={2}>
        <Link to="/cargo"><TransparentButton>доставить</TransparentButton></Link>
      </Grid>
    </Grid>
  </Container>

SearchForm.propTypes = {}

export default SearchForm
