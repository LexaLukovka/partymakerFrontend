import React, { memo } from 'react'
import { object, func, bool } from 'prop-types'
import {
  withStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core'

const styles = {
  root: {},
}

const LeaveRoomDialog = ({ classes, isOpen, onConfirm, onCancel }) =>
  <Dialog className={classes.root} open={isOpen} onClose={onCancel}>
    <DialogTitle>Вы действительно хотите покинуть событие?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Вы можете вернуться в это событие кликнув по пригласительной ссылке
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel}>Отмена</Button>
      <Button color="primary" variant="outlined" onClick={onConfirm}>Покинуть</Button>
    </DialogActions>
  </Dialog>

LeaveRoomDialog.propTypes = {
  classes: object.isRequired,
  isOpen: bool.isRequired,
  onConfirm: func.isRequired,
  onCancel: func.isRequired,
}

const isEqual = (prev, next) => {
  return prev.isOpen !== next.isOpen
}

export default withStyles(styles)(memo(LeaveRoomDialog, isEqual))
