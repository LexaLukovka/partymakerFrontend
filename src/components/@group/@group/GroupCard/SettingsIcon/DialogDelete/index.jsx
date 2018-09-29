import React from 'react'
import { bool, object } from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core'
import connector from '../connector'
import { withRouter } from 'react-router-dom'

class DialogDelete extends React.Component {
  handleDelete = (id) => {
    const { actions, history } = this.props
    actions.delete.deleteGroup(id)

    this.handleCloseDelete()
    history.push('/user')
  }

  handleCloseDelete = () => {
    const { actions } = this.props
    actions.delete.close()
  }

  render() {
    const { isOpen, group } = this.props
    return (
      <Dialog
        open={isOpen}
        onClose={this.handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography align="center" variant="subheading">Вы уверены что хотите удалить компанию?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleDelete(group.id)}>
            Удалить
          </Button>
          <Button onClick={this.handleCloseDelete} color="primary" autoFocus>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

DialogDelete.propTypes = {
  actions: object.isRequired,
  history: object.isRequired,
  group: object.isRequired,
  isOpen: bool.isRequired,
}

export default connector(withRouter(DialogDelete))
