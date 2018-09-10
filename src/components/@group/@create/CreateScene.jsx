import React from 'react'
import { bool, func, object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button, Grid, withStyles } from '@material-ui/core'

import PlaceInput from './PlaceInput'

import isEmpty from 'lodash/isEmpty'
import { Field } from 'formik'
import FormikText from './formik/FormikText'
import FormikAddress from './formik/FormikAddress'

import formik from './formik'
import connector from './connector'

const styles = theme => ({
  root: {
    padding: '0 15px',
    margin: '0 auto',
    maxWidth: 700,
    marginTop: theme.spacing.size4,
    '@media only screen and (max-width: 320px)': {
      marginTop: 0,
    },
  },

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

class CreateScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
  }

  removePlace = () => {
    const { actions } = this.props
    actions.party.resetPlace()
  }

  render() {
    const { classes, party, ...formHOC } = this.props
    const { isSubmitting, handleSubmit } = formHOC

    const { place } = party.form

    return (
      <form className={classes.root}>
        {isEmpty(place) ?
          <div>
            <Field
              label="Место встречи"
              component={FormikAddress}
              name="address"
              type="name"
              placeholder="Адрес"
            />
          </div> :
          <PlaceInput place={place} onCancel={this.removePlace} />
        }

        <Field
          label="Что будет?"
          component={FormikText}
          name="title"
          type="name"
          placeholder="Поход на бухич"
        />
        <Field
          label="Когда состоится?"
          component={FormikText}
          name="startDay"
          type="date"
          placeholder="Дата"
        />
        <Field
          label="Во сколько начало?"
          component={FormikText}
          name="startTime"
          type="time"
          placeholder="Время"
        />
        <Field
          component={FormikText}
          type="time"
          name="description"
          label="Описание"
          placeholder="Описание встречи"
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
      </form>
    )
  }
}

CreateScene.propTypes = {
  history: object.isRequired,
  place: object.isRequired,
  party: object.isRequired,
  actions: object.isRequired,
  classes: object.isRequired,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
}

const router = withRouter(CreateScene)
const style = withStyles(styles)(router)
const redux = connector(style)

export default formik(redux)
