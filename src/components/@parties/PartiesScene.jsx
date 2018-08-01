import React from 'react'
import { array, object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import connector from './connector'
import PartiesCard from './PartiesCard'
import Container from '../Container'
import isEmpty from 'lodash/isEmpty'

const styles = {
  root: {
    marginTop: 15,
  },
  loading: {
    marginTop: 20,
  },
}

class PartiesScene extends React.Component {
  componentWillMount() {
    this.props.actions.parties.outputParty()
  }

  render() {
    const { classes, loading, parties } = this.props
    if (loading) {
      return (
        <Container className={classes.loading}>
          <Grid container justify="center">
            <CircularProgress className={classes.progress} size={80} />
          </Grid>
        </Container>
      )
    }
    if (isEmpty(parties)) {
      return (
        <Container className={classes.loading}>
          <Grid container justify="center">
            <Typography variant="display1"> Not found</Typography>
          </Grid>
        </Container>
      )
    }

    return (
      <Container className={classes.root}>
        <Grid container justify="center">
          {parties.map((party, index) => <PartiesCard key={index} party={party} />)}
        </Grid>
      </Container>
    )
  }
}

PartiesScene.propTypes = {
  classes: object.isRequired,
  parties: array,
  loading: bool.isRequired,
  actions: object.isRequired,
}

PartiesScene.defaultProps = {
  parties: [],
}
export default withStyles(styles)(connector(PartiesScene))
