import React from 'react'
import { object, func, bool } from 'prop-types'
import { Dialog, DialogContent, Typography, withStyles } from '@material-ui/core'
import OutlineCard from 'components/elements/OutlineCard'

const styles = {
  root: {},
  card: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 600,
    minHeight: 400,
  }
}

const InviteDialog = ({ classes, isOpen, onClose }) =>
  <Dialog className={classes.root} open={isOpen} onClose={onClose}>
    <DialogContent>
      <OutlineCard className={classes.card}>
        <div>
          <Typography align="center" color="textSecondary">
            Скопируйте эту ссылку и отправьте её вашим гостям что бы пригласить
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            color="primary"
          >https://partymaker.zp.ua/invite/R2xRwaTs
          </Typography>
        </div>
      </OutlineCard>
    </DialogContent>
  </Dialog>

InviteDialog.propTypes = {
  classes: object.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
}

export default withStyles(styles)(InviteDialog)
