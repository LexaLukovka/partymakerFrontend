import React from 'react'
import { object, func, bool } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography, TextField } from '@material-ui/core'
import Geosuggest from '../../../Geosuggest/index'
import formik from './formik'
import connector from '../connector'

const styles = theme => ({
  root: {
    padding: '0 15px',
    marginTop: theme.spacing.size4,
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
    },
  },
  input: {
    marginBottom: theme.spacing.size3,
    '@media only screen and (max-width: 320px)': {
      marginBottom: theme.spacing.size1,
    },
  },
  inputNumber: {
    marginLeft: theme.spacing.size3,
    maxWidth: 70,
  },
  button: {
    // background: 'linear-gradient(#BE05C5 30%, #9306BC 90%)',
    marginRight: theme.spacing.size4,
  },
  flex: {
    display: 'flex',
  },
  checked: {
    height: 25,
  },
  buttonGroup: {
    marginTop: theme.spacing.size4,
  },
})

class GeneralForm extends React.Component {
  componentDidMount() {
    const { actions, party, history } = this.props

    if (!party.form.type) {
      history.push('/parties/create/step/1')
    }

    actions.party.update({ step: 2 })
  }

  hasError = (fieldName) => {
    const { errors, touched } = this.props
    return (!!errors[fieldName] && touched[fieldName])
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props
    return (touched[fieldName] && errors[fieldName])
  }

  render() {
    const { classes, ...formHOC } = this.props

    const {
      values,
      isSubmitting,
      handleChange,
      handleSubmit,
      handleBlur,
      setFieldValue,
      setFieldTouched,
    } = formHOC

    return (
      <form className={classes.root}>
        <div className={classes.input}>
          <Typography variant="subheading">Название вечеринки</Typography>
          <TextField
            fullWidth
            name="title"
            placeholder="Название"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('title')}
            helperText={this.showHelperError('title')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">В каком районе будет вечеринка?</Typography>
          <TextField
            fullWidth
            name="district"
            placeholder="Район"
            value={values.district}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('district')}
            helperText={this.showHelperError('district')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">По какому адресу?</Typography>
          <Geosuggest
            fullWidth
            name="address"
            placeholder="Адрес"
            value={values.address}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={this.hasError('address')}
            helperText={this.showHelperError('address')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Когда состоится?</Typography>
          <TextField
            fullWidth
            type="date"
            name="startDay"
            placeholder="Дата"
            value={values.startDay}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('startDay')}
            helperText={this.showHelperError('startDay')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Во сколько начало?</Typography>
          <TextField
            fullWidth
            type="time"
            name="startTime"
            placeholder="Время"
            value={values.startTime}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('startTime')}
            helperText={this.showHelperError('startTime')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Сколько людей нужно?</Typography>
          <Grid className={classes.flex}>
            <Grid item container justify="flex-start">
              <Typography variant="subheading">от</Typography>
              <TextField
                type="number"
                className={classes.inputNumber}
                name="peopleMin"
                value={values.peopleMin}
                onChange={handleChange}
                onBlur={handleBlur}
                error={this.hasError('peopleMin')}
                helperText={this.showHelperError('peopleMin')}
              />
            </Grid>
            <Grid item container justify="flex-end">
              <Typography variant="subheading">до</Typography>
              <TextField
                type="number"
                className={classes.inputNumber}
                name="peopleMax"
                value={values.peopleMax}
                onChange={handleChange}
                onBlur={handleBlur}
                error={this.hasError('peopleMax')}
                helperText={this.showHelperError('peopleMax')}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Описание</Typography>
          <TextField
            fullWidth
            multiline
            rows={2}
            rowsMax={3}
            name="description"
            placeholder="Описание"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('description')}
            helperText={this.showHelperError('description')}
          />
        </div>
        <Grid container justify="space-between" className={classes.buttonGroup}>
          <Link to="/parties/create/step/1">
            <Button
              size="large"
              disabled={isSubmitting}
            >
              Назад
            </Button>
          </Link>
          <Button
            className={classes.button}
            onClick={handleSubmit}
            variant="contained"
            size="large"
            color="primary"
            disabled={isSubmitting}
          >
            Дальше
          </Button>
        </Grid>
      </form>
    )
  }
}

GeneralForm.propTypes = {
  history: object.isRequired,
  party: object.isRequired,
  actions: object.isRequired,
  classes: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  values: object.isRequired,
  setFieldValue: func.isRequired,
  setFieldTouched: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
}

const router = withRouter(GeneralForm)
const style = withStyles(styles)(router)
const redux = connector(style)

export default formik(redux)
