import React from 'react'
import { func, object } from 'prop-types'
import { withStyles, Typography, TextField, Button, Grid } from '@material-ui/core'
import connector from '../connector'
import formik from './formik'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  flex: {
    display: 'flex',
    paddingRight: 40,
    paddingLeft: 40,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
  inputNumber: {
    marginLeft: theme.spacing.size3,
    maxWidth: 70,
  },
})

class PeopleScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    actions.header.title('Кол-во людей')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
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
    const { classes, values, handleSubmit, handleChange, handleBlur } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Typography variant="subheading">Сколько людей нужно?</Typography>
          <Grid className={classes.flex}>
            <Grid item container justify="flex-start">
              <Typography variant="subheading">от</Typography>
              <TextField
                type="number"
                className={classes.inputNumber}
                name="people_min"
                value={values.people_min}
                onChange={handleChange}
                onBlur={handleBlur}
                error={this.hasError('people_min')}
                helperText={this.showHelperError('people_min')}
              />
            </Grid>
            <Grid item container justify="flex-end">
              <Typography variant="subheading">до</Typography>
              <TextField
                type="number"
                className={classes.inputNumber}
                name="people_max"
                value={values.people_max}
                onChange={handleChange}
                onBlur={handleBlur}
                error={this.hasError('people_max')}
                helperText={this.showHelperError('people_max')}
              />
            </Grid>
          </Grid>
        </div>
        <Button variant="raised" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

PeopleScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
}

export default formik(connector(withStyles(styles)(PeopleScene)))
