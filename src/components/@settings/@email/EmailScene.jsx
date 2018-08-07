import React from 'react'
import { object } from 'prop-types'
import { withStyles, Typography, TextField, Button } from '@material-ui/core'
import Helper from '../Helper'
import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 23,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
  button: {
    marginTop: theme.spacing.size3,
  },
})

const EmailScene = ({ classes, user }) =>
  <div className={classes.root}>
    <div className={classes.input}>
      <Typography variant="subheading">Email</Typography>
      <TextField
        fullWidth
        name="email"
        placeholder="Email"
        defaultValue={user.email}
      />
    </div>
    <Helper>Ваша почта будет видна всем всем людям на вашей вечеринке</Helper>
    <Button variant="raised" color="primary" className={classes.button}> Сохранить </Button>
  </div>

EmailScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(EmailScene))
