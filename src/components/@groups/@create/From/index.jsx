import React from 'react'
import { Button, Grid, withStyles } from '@material-ui/core'

import { Field } from 'formik'
import FormikText from 'components/@groups/@create/formik/FormikText'
import FormikDateTime from 'components/@groups/@create/formik/FormikDateTime'
import { bool, func, object } from 'prop-types'

const styles = theme => ({
  checked: {
    height: 25,
  },

  buttonGroup: {
    marginTop: theme.spacing.size4,
    marginBottom: theme.spacing.size3,
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
      marginBottom: 0,
    },
  },
})

const Form = ({ classes, isSubmitting, handleSubmit }) =>
  <div>
    <Field
      label="Что будет?"
      component={FormikText}
      name="title"
      placeholder="Поход на бухич"
    />
    <Field
      label="Когда и во сколько?"
      component={FormikDateTime}
      name="date"
      placeholder="Дата и время"
    />
    <Field
      component={FormikText}
      name="description"
      label="Описание"
      placeholder="Описание встречи"
      multiline
      rows={2}
      rowsMax={3}
    />

    <Grid container justify="center" className={classes.buttonGroup}>
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        size="large"
        color="primary"
        disabled={isSubmitting}
      >
        Создать компанию
      </Button>
    </Grid>
  </div>

Form.propTypes = {
  classes: object.isRequired,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
}

export default withStyles(styles)(Form)
