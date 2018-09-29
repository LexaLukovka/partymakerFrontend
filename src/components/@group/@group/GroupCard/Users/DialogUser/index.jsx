import React from 'react'
import { bool, func, object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, withStyles } from '@material-ui/core'
import User from './User'

const styles = {
  content: {
    paddingBottom: 10,
  },
  flex: {
    marginTop: 0,
    marginBottom: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  profile: {
    // paddingLeft: 0,
    align: 'left',
  },
}

const DialogUser = ({ classes, user, isOpen, close }) =>
  user &&
  <Dialog
    open={isOpen}
    onClose={close}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent className={classes.content}>
      <User user={user} />
    </DialogContent>
    <DialogActions className={classes.flex}>
      <Link to={`/users/${user.id}`}>
        <Button className={classes.profile}>
          Профиль
        </Button>
      </Link>
      <Button color="primary" onClick={close} autoFocus>
        Отмена
      </Button>
    </DialogActions>
  </Dialog>

DialogUser.propTypes = {
  classes: object.isRequired,
  user: object,
  isOpen: bool.isRequired,
  close: func.isRequired,
}

DialogUser.defaultProps = {
  user: null,
}

export default withStyles(styles)(DialogUser)
