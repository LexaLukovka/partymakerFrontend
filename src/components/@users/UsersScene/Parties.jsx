import React from 'react'
import { object, bool, number } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFoundMyParties from 'components/NotFound/MyParties'
import NotFoundUserParties from 'components/NotFound/UserParties'
import { withStyles } from '@material-ui/core'
import connector from './connector'
import PartiesList from 'components/@parties/PartiesScene/PartiesList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 15,
    maxWidth: 1300,
    margin: '0 auto',
  },
}

class Parties extends React.Component {
  componentWillMount() {
    const { actions, admin_id } = this.props
    actions.actionButton.show()
    actions.parties.load({ admin_id })
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.actionButton.hide()
  }

  render() {
    const { classes, parties: { parties, loading }, currentUser } = this.props
    if (loading) return <Loading />
    if (isEmpty(parties)) return currentUser ? <NotFoundMyParties /> : <NotFoundUserParties />

    return (
      <div className={classes.root}>
        <PartiesList parties={parties} />
      </div>
    )
  }
}

Parties.propTypes = {
  classes: object.isRequired,
  parties: object.isRequired,
  actions: object.isRequired,
  admin_id: number.isRequired,
  currentUser: bool.isRequired,
}

export default connector(withStyles(styles)(Parties))
