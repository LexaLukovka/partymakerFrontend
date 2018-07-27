import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/es/Typography/Typography'
import FormControlLabel from '@material-ui/core/es/FormControlLabel/FormControlLabel'
import Switch from '@material-ui/core/es/Switch/Switch'
import Button from '@material-ui/core/es/Button/Button'
import TextField from '@material-ui/core/es/TextField/TextField'
import Grid from '@material-ui/core/es/Grid/Grid'
import connector from '../connector'
import PictureUpload from './PictureUpload'
import partyCreateFinishFormik from './partyCreateFinishFormik'

const styles = theme => ({
  root: {
    maxWidth: 400,
    marginTop: theme.spacing.size4,
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
  handleChange = () => {
    this.props.actions.party.partyPrivateChecked(this.props.party.checkedPrivate)
  }

  handleBack = (activeStep) => {
    this.props.actions.stepper.stepperNavigationBack(activeStep)
  }

  render() {
    const {
      classes,
      activeStep,
      values,
      setFieldValue,
      setFieldTouched,
      handleSubmit,
      party,
    } = this.props
    const checked = party.checkedPrivate

    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <FormControlLabel
          className={classes.checked}
          label="Приватная вечеринка"
          control={<Switch
            name="checked"
            checked={checked}
            onChange={this.handleChange}
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
        </div>
        <PictureUpload
          name="pictures"
          value={values.pictures}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
        />

        <Typography variant="subheading" className={classes.typography}> Ссылка для приглашения </Typography>
        <TextField
          className={classes.mb}
          fullWidth
          name="telegramUrl"
          defaultValue={values.telegramUrl}
          disabled
        />
        <Grid container justify="center" className={classes.buttonGroup}>
          <Button
            disabled={activeStep === 0}
            onClick={() => this.handleBack(activeStep)}
          >
            Назад
          </Button>
          <Button type="submit" variant="contained" color="primary"> Готово </Button>
        </Grid>
      </form>
    )
  }
}

PartyCardFinish.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  party: PropTypes.object.isRequired,
  activeStep: PropTypes.number.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(connector(partyCreateFinishFormik(PartyCardFinish)))
