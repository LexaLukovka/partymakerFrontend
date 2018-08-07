import React from 'react'
import { array, object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PartiesCard from './PartiesCard'
import isEmpty from 'lodash/isEmpty'
import Loading from '../Loading'
import NotFound from '../NotFound'
import connector from './connector'

const styles = {
  root: {
    marginTop: 15,
    margin: 10,
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
        <PartiesCard />
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
