import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/es/Typography/Typography'
import FormControlLabel from '@material-ui/core/es/FormControlLabel/FormControlLabel'
import Switch from '@material-ui/core/es/Switch/Switch'
import Button from '@material-ui/core/es/Button/Button'
import TextField from '@material-ui/core/es/TextField/TextField'

const styles = theme => ({
  root: {
    maxWidth: 400,
    marginTop: theme.spacing.size4,
    // textAlign: 'center',
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
    },
  },
  mb: {
    marginBottom: theme.spacing.size3,
  },
  typography: {
    marginBottom: theme.spacing.size1,
  },
  checked: {
    height: 30,
  },
})

class PartyCardFinish extends React.Component {
  state = {
    checked: true,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render() {
    const { classes } = this.props
    console.log(this.state.checked)
    return (
      <form className={classes.root}>
        <FormControlLabel
          className={classes.checked}
          label="Приватная вечеринка"
          control={<Switch
            checked={this.state.checked}
            onChange={this.handleChange('checked')}
            value="checked"
            color="primary"
          />}
        />
        <Typography variant="caption" className={classes.mb}>
          Эту вечеринку будут видеть только приглашенные вами пользователи
        </Typography>
        <div className={classes.mb}>
          <Typography variant="body1" className={classes.typography}>
            Если у вас есть фотографии с места вечеринки, пожалуйста загрузите их, чтобы друзья понимали куда идут
          </Typography>
          <Button variant="contained" color="primary">Загрузить фотки</Button>
        </div>
        <Typography variant="subheading" className={classes.typography}> Ссылка для приглашения </Typography>
        <TextField
          className={classes.mb}
          fullWidth
          name="link"
          defaultValue="http://partymaker.ua/11111/ivite"
          disabled
        />
      </form>
    )
  }
}

PartyCardFinish.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PartyCardFinish)
