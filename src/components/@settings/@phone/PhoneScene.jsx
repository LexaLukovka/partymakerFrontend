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

class PhoneScene extends React.Component {
  componentDidMount() {
    this.props.actions.header.setTitle('Телефон')
  }

  componentWillUnmount() {
    this.props.actions.header.resetTitle()
  }

  render() {
    const { classes, user } = this.props
    return (
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
    )
  }
}

PhoneScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(PhoneScene))
