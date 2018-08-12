import React from 'react'
import { object, bool, shape } from 'prop-types'
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
        <ListItem to={`/user/parties/${party.id}/edit/address`}>
          <ListItemText primary="Адрес" secondary={party.address.address} />
        </ListItem>
        <ListItem to={`/user/parties/${party.id}/edit/startTime`}>
          <ListItemText primary="Приходить на" secondary={party.start_time} />
        </ListItem>
        <ListItem to={`/user/parties/${party.id}/edit/people`}>
          <ListItemText
            primary="Собирается"
            secondary={`от ${party.people_min} до ${party.people_max} человек`}
          />
        </ListItem>
        <ListItem to={`/user/parties/${party.id}/edit/description`}>
          <ListItemText primary="Описание" secondary={party.description} />
        </ListItem>
      </List>
    )
  }
}

EditScene.propTypes = {
  party: object.isRequired,
  actions: shape({
    header: object,
  }).isRequired,
  match: object.isRequired,
  loading: bool.isRequired,
}

export default connector(EditScene)
