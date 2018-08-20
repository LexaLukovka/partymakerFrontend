import React from 'react'
import { array, object, bool, number } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFoundMyParties from 'components/NotFound/MyParties'
import NotFoundUserParties from 'components/NotFound/UserParties'

import connector from './connector'
import PartiesList from 'components/@parties/PartiesScene/PartiesList'

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
    const { parties: { parties, loading }, currentUser } = this.props
    if (loading) return <Loading />
    if (isEmpty(parties)) return currentUser ? <NotFoundMyParties /> : <NotFoundUserParties />

    return (
      <PartiesList parties={parties} />
    )
  }
}

Parties.propTypes = {
  parties: object.isRequired,
  actions: object.isRequired,
  admin_id: number.isRequired,
  currentUser: bool.isRequired,
}

export default connector(Parties)
