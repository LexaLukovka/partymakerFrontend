import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import PartyCard from './PratyCard'

const styles = theme => ({
  root: {
    // color: theme.palette.common.white,
    flexGrow: 1,
    margin: theme.spacing.size2,
  },
})

const PartyCreateScene = ({ classes }) =>
  <Container>
    <Grid container justify="center">
      <Grid item md={5} className={classes.root}>
        <PartyCard />
      </Grid>
    </Grid>
  </Container>

PartyCreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PartyCreateScene)
