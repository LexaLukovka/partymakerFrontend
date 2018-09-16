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

class TitleScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    actions.header.title('Название')
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
          <Typography variant="subheading">Навание вечеринки</Typography>
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
        <Button variant="raised" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

TitleScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
}

export default formik(connector(withStyles(styles)(TitleScene)))
