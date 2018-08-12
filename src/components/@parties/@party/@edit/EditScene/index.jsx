import React from 'react'
import { object, bool, shape } from 'prop-types'
import { List, ListItemText } from '@material-ui/core'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import ListItem from './ListItem'
import connector from '../connector'

class EditScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    actions.parties.show(match.params.id)
  }

  componentDidMount() {
    const { actions } = this.props
    actions.header.title('Редактирование')
    actions.header.back()
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.resetTitle()
    actions.header.menu()
  }

  render() {
    const { loading, party } = this.props
    if (loading) return <Loading />
    if (isEmpty(party)) return <NotFound />

    return (
      <List>
        <ListItem to={`/parties/${party.id}/edit/district`}>
          <ListItemText primary="Район" secondary={party.address.district} />
        </ListItem>
        <ListItem to={`/parties/${party.id}/edit/address`}>
          <ListItemText primary="Адрес" secondary={party.address.address} />
        </ListItem>
        <ListItem to={`/parties/${party.id}/edit/startTime`}>
          <ListItemText primary="Приходить на" secondary={party.start_time} />
        </ListItem>
        <ListItem to={`/parties/${party.id}/edit/people`}>
          <ListItemText
            primary="Собирается"
            secondary={`от ${party.people_min} до ${party.people_max} человек`}
          />
        </ListItem>
        <ListItem to={`/parties/${party.id}/edit/description`}>
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
