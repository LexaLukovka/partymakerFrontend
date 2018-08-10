import React from 'react'
import { array, object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PartiesList from './PartiesList'
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

class MyPartiesScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    actions.parties.userLoad(match.params.id)
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

MyPartiesScene.propTypes = {
  classes: object.isRequired,
  parties: array.isRequired,
  loading: bool.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}
export default withStyles(styles)(connector(MyPartiesScene))
