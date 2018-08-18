import React from 'react'
import { object, string, shape, func, bool, number } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, TextField, Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: '5px 0',
  },
  flex: {
    display: 'flex',
  },
  inputNumber: {
    marginLeft: theme.spacing.size3,
    maxWidth: 70,
  },
})

const PeopleInput = ({ classes, values, handleChange, handleBlur, errors, touched }) =>
  <div className={classes.root}>
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
          error={!!errors.peopleMin && touched.peopleMin}
          helperText={errors.peopleMin}
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
          error={!!errors.peopleMax && touched.peopleMax}
          helperText={errors.peopleMax}
        />
      </Grid>
    </Grid>
  </div>

PeopleInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    peopleMin: number,
    peopleMax: number,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: shape({
    peopleMin: string,
    peopleMax: string,
  }).isRequired,
  touched: object.isRequired,

}

export default withStyles(styles)(PeopleInput)
