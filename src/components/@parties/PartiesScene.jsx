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
    const { classes, parties, partiese } = this.props
    return (
      <Container className={classes.root}>
        {console.log(partiese)}
        <Grid container justify="center">
          {parties.map((party, index) => <PartiesCard key={index} party={party} />)}
        </Grid>
      </Container>
    )
  }
}

PartiesScene.propTypes = {
  classes: object.isRequired,
  parties: arrayOf(object).isRequired,
  partiese: arrayOf(object),
  actions: object.isRequired,
}
PartiesScene.defaultProps = {
  partiese: null,
}
export default withStyles(styles)(connector(PartiesScene))
