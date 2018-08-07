import React from 'react'
import { object } from 'prop-types'
import { withStyles, Typography, TextField, Button } from '@material-ui/core'
import Helper from 'components/@settings/Helper'
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

const NameScene = ({ classes, user }) =>
  <div className={classes.root}>
    <div className={classes.input}>
      <Typography variant="subheading">Имя и фамилия</Typography>
      <TextField
        fullWidth
        name="name"
        placeholder="Имя и фамилия"
        defaultValue={user.name}
      />
    </div>
    <Helper>Ваше имя и фамилия будут видны всем пользователям</Helper>
    <Button variant="raised" color="primary" className={classes.button}> Сохранить </Button>
  </div>

NameScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(NameScene))
