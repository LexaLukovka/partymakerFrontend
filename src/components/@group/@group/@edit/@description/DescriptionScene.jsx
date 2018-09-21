import React from 'react'
import { func, object } from 'prop-types'
import { withStyles, Typography, TextField, Button } from '@material-ui/core'
import connector from '../connector'
import formik from './formik'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
})

class DescriptionScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    actions.header.title('Описание')
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
        <Button variant="raised" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

DescriptionScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
}

export default formik(connector(withStyles(styles)(DescriptionScene)))
