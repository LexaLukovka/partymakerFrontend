import React from 'react'
import { object } from 'prop-types'
import { List, ListItemText, Dialog, withStyles } from '@material-ui/core'
import ListItem from './ListItem'
import connector from '../connector'
import NameScene from '../@name/NameScene'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import IconButton from '@material-ui/core/IconButton/IconButton'
import CloseIcon from 'mdi-react/CloseIcon'
import Typography from '@material-ui/core/Typography/Typography'
import Button from '@material-ui/core/Button/Button'
import Slide from '@material-ui/core/Slide/Slide'

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
}

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class SettingsScene extends React.Component {
  state = {
    open: false,
  }

  componentWillMount() {
    this.props.actions.header.setTitle('Настройки')
  }

  componentWillUnmount() {
    this.props.actions.header.resetTitle()
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }


  render() {
    const { classes, user } = this.props
    return (
      <div>
        <List>
          <ListItem onClick={this.handleClickOpen}>
            <ListItemText primary="Имя и фамилия" secondary={user.name} />
          </ListItem>
          {/*<ListItem to="/settings/name">*/}
          {/*<ListItemText primary="Имя и фамилия" secondary={user.name} />*/}
          {/*</ListItem>*/}
          {/*<ListItem to="/settings/email">*/}
          {/*<ListItemText primary="Email" secondary={user.email} />*/}
          {/*</ListItem>*/}
          {/*<ListItem to="/settings/phone">*/}
          {/*<ListItemText primary="Номер телефона" secondary={user.phone} />*/}
          {/*</ListItem>*/}
          {/*<ListItem to="/settings/password">*/}
          {/*<ListItemText primary="Сменить пароль" />*/}
          {/*</ListItem>*/}
          {/*<ListItem to="/settings/avatar">*/}
          {/*<ListItemText primary="Сменить аватар" />*/}
          {/*</ListItem>*/}
        </List>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Имя
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Соранить
              </Button>
            </Toolbar>
          </AppBar>
          <NameScene />
        </Dialog>
      </div>
    )
  }
}


SettingsScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
