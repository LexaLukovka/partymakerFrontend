import React from 'react'
import { object, bool, shape } from 'prop-types'
import { withStyles, List, ListItemText, Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core'
import ListDeleteItem from '@material-ui/core/ListItem'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import ListItem from './ListItem'
import connector from '../connector'

const styles = {
  delete: {
    paddingTop: 15,
    paddingBottom: 15,
  },
}

class EditScene extends React.Component {
  state = {
    open: false,
  }

  componentWillMount() {
    const { actions, match } = this.props
    actions.party.show(match.params.id)
  }

  componentDidMount() {
    const { actions, party } = this.props
    actions.header.back(`/parties/${party.id}`)
    actions.header.title('Редактирование')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
  }

  handleDelete = () => {

  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { loading, party, classes } = this.props
    if (loading) return <Loading />
    if (isEmpty(party)) return <NotFound />

    return (
      <List>
        <ListItem to={`/parties/${party.id}/edit/title`}>
          <ListItemText primary="Название вечеринки" secondary={party.title} />
        </ListItem>
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
        <ListItem to={`/parties/${party.id}/edit/image`}>
          <ListItemText primary="Сменить фото вечеринки" />
        </ListItem>
        <ListDeleteItem divider button className={classes.delete}>
          <ListItemText primary="Удалить вечеринку" onClick={this.handleClickOpen} />
        </ListDeleteItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Вы уверены что хотите удалить вечеринку?</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Удалить
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Отмена
            </Button>
          </DialogActions>
        </Dialog>
      </List>
    )
  }
}

EditScene.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
  actions: shape({
    header: object,
  }).isRequired,
  match: object.isRequired,
  loading: bool.isRequired,
}

export default connector(withStyles(styles)(EditScene))
