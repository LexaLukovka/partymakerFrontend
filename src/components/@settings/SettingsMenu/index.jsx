import React from 'react'
import PropTypes from 'prop-types'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircle from '@material-ui/icons/es/AccountCircle'
import Lock from '@material-ui/icons/es/Lock'

const styles = theme => ({
  root: {
    width: 300,
    marginRight: '2rem',
    height: '100%',
  },
  menuItem: {
    height: 40,
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
})

class SettingsMenu extends React.Component {
  handleSubmit = (value) => {
    console.log(value)
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <MenuList>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText
              onClick={this.handleSubmit(1)}
              classes={{ primary: classes.primary }}
              inset
              primary="Профиль"
            />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <Lock />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Пароль" />
          </MenuItem>
        </MenuList>
      </Paper>
    )
  }
}

SettingsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SettingsMenu)
