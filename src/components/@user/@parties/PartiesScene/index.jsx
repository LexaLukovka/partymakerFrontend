import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PartiesList from './PartiesList'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound/MyParties'
import connector from './connector'

const styles = {
  root: {
    marginTop: 15,
    margin: 10,
  },
}

class PartiesScene extends React.Component {
  componentWillMount() {
    const { actions } = this.props
    actions.parties.userLoad()
  }

  like = (id) => {
    this.props.actions.like.like(id)
  }

  render() {
    const { classes, parties } = this.props
    if (parties.loading) return <Loading />
    if (isEmpty(parties.parties)) return <NotFound />
    return (
      <div className={classes.root}>
        <PartiesList onLike={this.like} parties={parties.parties} />
      </div>
    )
  }
}

PartiesScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  parties: object,
}

PartiesScene.defaultProps = {
  parties: {},
}
export default withStyles(styles)(connector(PartiesScene))
