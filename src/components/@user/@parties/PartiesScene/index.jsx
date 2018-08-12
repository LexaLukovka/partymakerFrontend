import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound/MyParties'
import connector from './connector'
import PartiesList from 'components/@parties/PartiesScene/PartiesList'

const styles = {
  root: {
    marginTop: 15,
    margin: 10,
  },
}

class PartiesScene extends React.Component {
  componentWillMount() {
    const { actions, auth } = this.props
    actions.parties.load({ admin_id: auth.user.id })
  }

  render() {
    const { classes, parties } = this.props
    if (parties.loading) return <Loading />
    if (isEmpty(parties.parties)) return <NotFound />

    return (
      <div className={classes.root}>
        <PartiesList parties={parties.parties} />
      </div>
    )
  }
}

PartiesScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  parties: object.isRequired,
  auth: object.isRequired,
}
export default withStyles(styles)(connector(PartiesScene))
