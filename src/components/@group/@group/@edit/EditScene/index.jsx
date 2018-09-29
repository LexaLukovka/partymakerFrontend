import React from 'react'
import { bool, object, shape } from 'prop-types'
import { List, ListItemText } from '@material-ui/core'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import ListItem from './List/ListItem'
import connector from '../connector'
import moment from 'moment'

class EditScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    actions.group.show(match.params.id)
  }

  componentDidMount() {
    const { actions, group } = this.props
    actions.header.back(`/group/${group.id}`)
    actions.header.title('Редактирование')
    document.title = 'Редактирование'
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
  }

  render() {
    const { loading, group } = this.props
    if (loading) return <Loading />
    if (isEmpty(group)) return <NotFound />

    return (
      <List>
        <ListItem to={`/group/${group.id}/edit/title`}>
          <ListItemText primary="Название вечеринки" secondary={group.title} />
        </ListItem>
        {group.address &&
        <React.Fragment>
          <ListItem to={`/group/${group.id}/edit/address`}>
            <ListItemText primary="Адрес" secondary={group.address.address} />
          </ListItem>
        </React.Fragment>
        }
        <ListItem to={`/group/${group.id}/edit/date`}>
          <ListItemText primary="Приходить на" secondary={moment(new Date(group.date)).fromNow()} />
        </ListItem>
        <ListItem to={`/group/${group.id}/edit/description`}>
          <ListItemText primary="Описание" secondary={group.description} />
        </ListItem>
      </List>
    )
  }
}

EditScene.propTypes = {
  loading: bool.isRequired,
  group: object.isRequired,
  actions: shape({
    header: object,
  }).isRequired,
  match: object.isRequired,
}

export default connector(EditScene)
