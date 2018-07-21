import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircle from '@material-ui/icons/es/AccountCircle'
import Lock from '@material-ui/icons/es/Lock'
import { settingsMenu } from '../../../redux/settings/menu/action'

const styles = theme => ({
  root: {
    width: 300,
    marginRight: '2rem',
    height: 'auto',
  },
  menuItem: {
    paddingRight: 40,
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
  handleSubmit = (values) => {
    this.props.dispatch(settingsMenu(values))
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <MenuList>
          <MenuItem
            onClick={() => this.handleSubmit(0)}
            className={classes.menuItem}
          >
            <ListItemIcon className={classes.icon}>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="Профиль"
            />
          </MenuItem>
          <MenuItem
            values={2}
            onClick={() => this.handleSubmit(1)}
            className={classes.menuItem}
          >
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
  dispatch: PropTypes.func.isRequired,
}

export default connect()(withStyles(styles)(SettingsMenu))
