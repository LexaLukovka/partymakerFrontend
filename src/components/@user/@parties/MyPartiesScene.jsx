import React from 'react'
import { array, object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PartiesList from 'components/@parties/PartiesScene/PartiesList'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import connector from '../connector'

const styles = {
  root: {
    marginTop: 15,
    margin: 10,
  },
}

class MyPartiesScene extends React.Component {
  componentWillMount() {
    const { auth, actions } = this.props
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

MyPartiesScene.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  parties: object.isRequired,
  actions: object.isRequired,
}
export default withStyles(styles)(connector(MyPartiesScene))
