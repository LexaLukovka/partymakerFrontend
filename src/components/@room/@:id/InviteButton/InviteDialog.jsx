import React from 'react'
import { object, func, bool, number } from 'prop-types'
import { Dialog, DialogContent, Typography, withStyles } from '@material-ui/core'
import OutlineCard from 'components/elements/OutlineCard'
import { FRONTEND_URL } from 'src/constants'

const styles = {
  root: {
    minWidth: 600,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 25,
    minHeight: 400,
  }
}

const InviteDialog = ({ classes, isOpen, onClose, room_id }) =>
  <Dialog className={classes.root} open={isOpen} onClose={onClose}>
    <DialogContent>
      <OutlineCard className={classes.card}>
        <div>
          <Typography
            gutterBottom
            variant="subtitle1"
            align="center"
            color="textSecondary"
          >
            Скопируйте эту ссылку и отправьте её вашим гостям что бы пригласить
          </Typography>
          <Typography
            align="center"
            variant="h5"
            color="primary"
          >{FRONTEND_URL}/invite/{room_id}
          </Typography>
        </div>
      </OutlineCard>
    </DialogContent>
  </Dialog>

InviteDialog.propTypes = {
  classes: object.isRequired,
  room_id: number.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
}

export default withStyles(styles)(InviteDialog)
