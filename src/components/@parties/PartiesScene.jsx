import React from 'react'
import { arrayOf, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import connector from './connector'
import PartiesCard from './PartiesCard'
import Container from '../Container'

const styles = {
  root: {
    marginTop: 15,
  },
}

class PartiesScene extends React.Component {
  componentWillMount() {
    this.props.actions.parties.outputParty()
  }

  render() {
    const { classes, parties } = this.props
    let allParties = {}
    if (parties) allParties = parties.data

    return (
      <Container className={classes.root}>
        <Grid container justify="center">
          {parties && allParties.map((party, index) => <PartiesCard key={index} party={party} />)}
        </Grid>
      </Container>
    )
  }
}

PartiesScene.propTypes = {
  classes: object.isRequired,
  parties: object,
  actions: object.isRequired,
}
PartiesScene.defaultProps = {
  parties: null,
}
export default withStyles(styles)(connector(PartiesScene))
