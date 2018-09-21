import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography/Typography'

const styles = {
  root: {
    display: 'flex',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textAlign: 'center',
  },
}

const UserGroups = ({ classes }) =>
  <div className={classes.root}>
    <div>
      <Typography align="center" variant="subheading">
        Пользователь пока не создавал вечеринок...
      </Typography>
    </div>
  </div>
UserGroups.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(UserGroups)
