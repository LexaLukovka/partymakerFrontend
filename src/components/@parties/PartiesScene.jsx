import React from 'react'
import { array, object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import connector from './connector'
import PartiesCard from './PartiesCard'
import isEmpty from 'lodash/isEmpty'
import Loading from '../Loading'
import NotFound from '../NotFound'

const styles = {
  root: {
    marginTop: 15,
  },
}

class PartiesScene extends React.Component {
  componentWillMount() {
    this.props.actions.parties.load()
  }

  render() {
    const { classes, loading, parties } = this.props
    if (loading) return <Loading />
    if (isEmpty(parties)) return <NotFound />

    return (
      <div className={classes.root}>
        <Grid container justify="center">
          {parties.map((party, index) => <PartiesCard key={index} party={party} />)}
        </Grid>
      </div>
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
