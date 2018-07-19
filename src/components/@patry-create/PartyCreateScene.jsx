/* eslint-disable prefer-destructuring */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/es/StepLabel/StepLabel'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import PartyCardForm from './PartyCardForm'
import PartyCardIcon from './PartyCardIcon'
import PartyCardFinish from './PartyCardFinish'
import connector from './connector'

const styles = theme => ({
  root: {
    width: 'auto',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
})

function getSteps() {
  return ['Тип', 'Создание', 'Приватность']
}

class PartyCreateScene extends React.Component {
  componentWillMount() {
    this.props.actions.partyTags.loadPartyTags()
  }

  render() {
    const { classes, step } = this.props
    const activeStep = step.activeStep
    const steps = getSteps()
    return (
      <Container>
        <div className={classes.root}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  {document.documentElement.clientWidth >= 765 ? label : ''}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            <Grid container justify="center">
              <div>
                <Grid className={classes.instructions}>
                  {activeStep === 0 && <PartyCardIcon activeStep={activeStep} />}
                  {activeStep === 1 && <PartyCardForm activeStep={activeStep} />}
                  {activeStep === 2 && <PartyCardFinish activeStep={activeStep} />}
                </Grid>

              </div>
            </Grid>
          </div>
        </div>
      </Container>
    )
  }
}

PartyCreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  step: PropTypes.object.isRequired,
}

export default (withStyles(styles)(connector(PartyCreateScene)))
