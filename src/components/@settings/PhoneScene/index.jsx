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

const PhoneScene = ({ classes, user }) =>
  <div className={classes.root}>
    <div className={classes.input}>
      <Typography variant="subheading">Номер телефона</Typography>
      <TextField
        fullWidth
        name="phone"
        placeholder="Телефон"
        defaultValue={user.phone}
      />
    </div>
    <Helper>Ваш номер телефона будет виден всем людям на вашей вечеринке</Helper>
    <Button variant="raised" color="primary" className={classes.button}> Сохранить </Button>
  </div>

PhoneScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(PhoneScene))
