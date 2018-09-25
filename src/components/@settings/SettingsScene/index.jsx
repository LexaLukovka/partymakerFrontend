import React from 'react'
import { object } from 'prop-types'
import { List, ListItemText } from '@material-ui/core'
import ListItem from './ListItem'
import connector from '../connector'

class SettingsScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props


    actions.header.setTitle('Настройки')
    document.title = 'Настройки'
  }

  // componentWillReceiveProps(nextProps) {
  //   const { actions, place, location: { search } } = this.props
  //   const { place_id } = qs.parse(search.replace('?', ''))
  //   if (place !== nextProps.place) {
  //     if (!isEmpty(nextProps.place) && place_id) {
  //       actions.group.update({ place: nextProps.place, address: nextProps.place.address })
  //     }
  //   }
  //   actions.header.back()
  //   document.title = 'Создание компании'
  // }

  componentWillUnmount() {
    this.props.actions.header.resetTitle()
  }

  render() {
    const { user } = this.props
    return (
      <List>
        <ListItem to="/settings/name">
          <ListItemText primary="Имя и фамилия" secondary={user.name} />
        </ListItem>
        <ListItem to="/settings/email">
          <ListItemText primary="Email" secondary={user.email} />
        </ListItem>
        <ListItem to="/settings/phone">
          <ListItemText primary="Номер телефона" secondary={user.phone} />
        </ListItem>
        <ListItem to="/settings/password">
          <ListItemText primary="Сменить пароль" />
        </ListItem>
      </List>
    )
  }
}

SettingsScene.propTypes = {
  user: object.isRequired,
  actions: object.isRequired,
}

export default connector(SettingsScene)
