import React from 'react'
import { array, object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PartiesList from './PartiesList'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import connector from './connector'

const styles = {
  root: {
    marginTop: 15,
    margin: 10,
  },
}

class PartiesScene extends React.Component {
  componentWillMount() {
    const { actions, parties } = this.props
    if (isEmpty(parties)) actions.parties.load()
  }

  like = (id) => {
    this.props.actions.like.like(id)
  }

  render() {
    const { classes, loading, parties } = this.props
    if (loading) return <Loading />
    if (isEmpty(parties)) return <NotFound />

    return (
      <div className={classes.root}>
        <PartiesList onLike={this.like} parties={parties} />
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
