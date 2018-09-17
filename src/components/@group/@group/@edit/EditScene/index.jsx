import React from 'react'
import { bool, object, shape } from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  List,
  ListItemText,
  Typography,
  withStyles,
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
    actions.group.show(match.params.id)
  }

  componentDidMount() {
    const { actions, group } = this.props
    actions.header.back(`/group/${group.id}`)
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
    const { loading, group, classes } = this.props
    if (loading) return <Loading />
    if (isEmpty(group)) return <NotFound />

    return (
      <List>
        <ListItem to={`/group/${group.id}/edit/title`}>
          <ListItemText primary="Название вечеринки" secondary={group.title} />
        </ListItem>
        {!group.place &&
        <React.Fragment>
          <ListItem to={`/group/${group.id}/edit/address`}>
            <ListItemText primary="Адрес" secondary={group.address.address} />
          </ListItem>
        </React.Fragment>
        }
        <ListItem to={`/group/${group.id}/edit/startTime`}>
          <ListItemText primary="Приходить на" secondary={group.start_time} />
        </ListItem>
        <ListItem to={`/group/${group.id}/edit/description`}>
          <ListItemText primary="Описание" secondary={group.description} />
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
            <Button onClick={() => this.handleDelete(group.id)}>
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
  group: object.isRequired,
  actions: shape({
    header: object,
  }).isRequired,
  match: object.isRequired,
  history: object.isRequired,
}

export default connector(withStyles(styles)(withRouter(EditScene)))
