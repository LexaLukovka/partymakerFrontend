import React from 'react'
import { func, object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Typography, withStyles } from '@material-ui/core'
import UserAvatar from 'components/User/UserAvatar'

const styles = {
  flex: {
    display: 'flex',
  },
  userName: {
    alignSelf: 'center',
    paddingLeft: 10,
  },
}

const DesktopAuth = ({ classes, user, onOpenMeu }) =>
  user
    ? <div className={classes.flex} onClick={onOpenMeu}>
      <UserAvatar small user={user} />
      <Typography className={classes.userName} variant="subtitle1" color="inherit">
        {user.name}
      </Typography>
    </div>
    : <React.Fragment>
      <Link to="/auth/login"><Button color="inherit">Войти</Button></Link>
      <Link to="/auth/register"><Button color="inherit">Зарегистрироваться</Button></Link>
    </React.Fragment>

DesktopAuth.propTypes = {
  user: object,
  onOpenMeu: func,
  classes: object.isRequired,
}

export default withStyles(styles)(DesktopAuth)
