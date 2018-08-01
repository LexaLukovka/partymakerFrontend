import React from 'react'
import { object, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import { Link } from 'react-router-dom'
import { Typography, FormControlLabel, Switch, Button, TextField, Grid } from '@material-ui/core'
import connector from '../connector'
import PictureUpload from './PictureUpload'
import formik from './formik'

const styles = theme => ({
  root: {
    padding: '0 15px',
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

class SummaryForm extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.party.update({ step: 3 })
  }

  handleSwitch = () => {
    const { actions, party } = this.props
    actions.party.update({ private: !party.form.private })
  }

  render() {
    const {
      classes,
      values,
      setFieldValue,
      setFieldTouched,
      handleSubmit,
      party,
    } = this.props

    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <FormControlLabel
          className={classes.checked}
          label="Приватная вечеринка"
          control={<Switch
            name="checked"
            checked={party.form.private}
            onChange={this.handleSwitch}
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
        <Grid container justify="space-between" className={classes.buttonGroup}>
          <Link to="/party/create/step/2">
            <Button>
              Назад
            </Button>
          </Link>
          <Button type="submit" variant="contained" color="primary"> Готово </Button>
        </Grid>
      </form>
    )
  }
}

SummaryForm.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  party: object.isRequired,
  values: object.isRequired,
  setFieldValue: func.isRequired,
  setFieldTouched: func.isRequired,
  handleSubmit: func.isRequired,
}

export default withStyles(styles)(connector(formik(SummaryForm)))
