import React from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Avatar, Typography, Grid, IconButton } from '@material-ui/core'
import Create from 'mdi-react/CreateIcon'
import PartiesScene from '../@parties/PartiesScene'
import initialsFromUsername from 'utils/initialsFromUsername'
import connector from '../connector'

const styles = (theme) => ({
  root: {
    padding: 15,
  },
  flex: {
    display: 'flex',
  },
  user: {
    marginBottom: 7,
  },
  avatar: {
    width: 100,
    height: 100,
    fontSize: 42,
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    alignSelf: 'center',
  },
})

const UserForm = ({ classes, user, id, auth }) => {
  let users = user
  if (!user) {
    users = auth.user
  }
  return (
    <React.Fragment>
      <div>
        <div className={classes.root}>
          <div className={classes.flex}>
            <Avatar className={classes.avatar} src={users.avatar_url}>
              {users.avatar_url ? null : initialsFromUsername(users.name)}
            </Avatar>
            <Grid container justify="center">
              <div>
                <Typography align="center" variant="title" className={classes.user}>{users.name}</Typography>
                <Typography align="center" variant="subheading" className={classes.user}>{users.email}</Typography>
                <Typography align="center" variant="subheading" className={classes.user}>{users.phone}</Typography>
              </div>
            </Grid>
            {!id &&
            <div className={classes.icon}>
              <Link to="/settings">
                <IconButton>
                  <Create />
                </IconButton>
              </Link>
            </div>
            }
          </div>
        </div>
        <PartiesScene id={id && id} />
      </div>
    </React.Fragment>
  )
}

UserForm.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  user: object.isRequired,
  id: string,
}

UserForm.defaultProps = {
  id: '',
}

export default withStyles(styles)(connector(UserForm))
