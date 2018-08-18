import React from 'react'
import { shape, object, bool } from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  withStyles,
  List,
  ListItemText,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@material-ui/core'
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

  handleDelete = (id) => {
    const { actions, history } = this.props
    actions.deleteParty.deleteParty(id)

    this.handleClose()
    history.push('/user')
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
          <DialogContent>
            <Typography align="center" variant="subheading">Вы уверены что хотите удалить вечеринку?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDelete(party.id)}>
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
  loading: bool.isRequired,
  party: object.isRequired,
  actions: shape({
    header: object,
  }).isRequired,
  match: object.isRequired,
  history: object.isRequired,
}

export default connector(withStyles(styles)(withRouter(EditScene)))
