import React from 'react'
import { object, bool } from 'prop-types'
import { List, ListItemText } from '@material-ui/core'
import ListItem from './ListItem'
import connector from 'components/@user/@parties/@party/connector'
import Loading from 'components/Loading'

class EditScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    actions.parties.show(match.params.id)
  }

  componentDidMount() {
    const { actions } = this.props
    actions.header.setTitle('Редакатирование')
    actions.header.setIcon('back')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.resetTitle()
    actions.header.setIcon('menu')
  }

  render() {
    const { loading, party } = this.props
    if (loading) return <Loading />

    return (
      <List>
        <ListItem to={`/user/parties/${party.id}/edit/district`}>
          <ListItemText primary="Район" secondary={party.address.district} />
        </ListItem>
      </List>
    )
  }
}

EditScene.propTypes = {
  party: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  loading: bool.isRequired,
}

export default connector(EditScene)
