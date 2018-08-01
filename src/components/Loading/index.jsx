import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import Container from '../Container'

const styles = {
  root: {
    marginTop: 20,
    textAlign: 'center',
  },
}

const Loading = ({ classes }) =>
  <Container className={classes.root}>
    <CircularProgress className={classes.progress} size={80} />
  </Container>

Loading.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Loading)
