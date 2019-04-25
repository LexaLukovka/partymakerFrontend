import React from 'react'
import { object, func } from 'prop-types'
import { SvgIcon, withStyles } from '@material-ui/core'
import AddLocationIcon from 'mdi-react/AddLocationIcon'

const styles = theme => ({
  root: {
    width: 50,
    height: 50,
    borderRadius: 8,
    background: 'rgba(117, 0, 151, 0.59)',
    border: `solid 2px ${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const SetPlaceIcon = ({ classes, onClick, }) =>
  <div className={classes.root} onClick={onClick}>
    <SvgIcon color="primary"><AddLocationIcon /></SvgIcon>
  </div>

SetPlaceIcon.propTypes = {
  classes: object.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(SetPlaceIcon)