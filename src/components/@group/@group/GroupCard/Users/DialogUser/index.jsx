import React from 'react'
import { bool, func, object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import User from './User'

const DialogUser = ({ user, isOpen, close }) =>
  user &&
  <Dialog
    open={isOpen}
    onClose={close}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      <User user={user} />
    </DialogContent>
    <DialogActions>
      <Link to={`/users/${user.id}`}>
        <Button>
          Посмотреть профиль
        </Button>
      </Link>
      <Button color="primary" onClick={close} autoFocus>
        Отмена
      </Button>
    </DialogActions>
  </Dialog>

DialogUser.propTypes = {
  user: object,
  isOpen: bool.isRequired,
  close: func.isRequired,
}

DialogUser.defaultProps = {
  user: null,
}

export default DialogUser
