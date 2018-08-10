import React from 'react'
import { object, number } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel } from '@material-ui/core'

const styles = {
  root: {
    marginTop: 15,
    padding: 5,
    background: 'inherit',
  },
}

const Steps = ({ classes, step }) =>
  <Stepper
    alternativeLabel
    activeStep={step - 1}
    className={classes.root}
  >
    {
      ['Тип', 'Создание', 'Приватность'].map((label) => (
        <Step key={label}>
          <StepLabel>
            {document.documentElement.clientWidth >= 765 ? label : ''}
          </StepLabel>
        </Step>
      ))
    }
  </Stepper>

Steps.propTypes = {
  classes: object.isRequired,
  step: number,
}
Steps.defaultProps = {
  step: null,
}

export default withStyles(styles)(Steps)
