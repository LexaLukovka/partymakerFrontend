import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
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
  buttonGroup: {
    marginTop: theme.spacing.size4,
  },
})

function getSteps() {
  return ['Тип', 'Создание', 'Приватность']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PartyCardIcon />
    case 1:
      return <PartyCardForm />
    case 2:
      return <PartyCardFinish />
    default:
      return 'Неизвестный шаг'
  }
}

class PartyCreateScene extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
  }

  componentWillMount() {
    this.props.actions.partyTags.loadPartyTags()
  }

  componentDidUpdate() {
    if (this.state.completed[0]) {
      console.log(1)
    }
  }

  totalSteps = () => getSteps().length

  handleNext = () => {
    let activeStep

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps()
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed))
    } else {
      activeStep = this.state.activeStep + 1
    }
    this.setState({
      activeStep,
    })
  }

  handleBack = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep - 1,
    })
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    })
  }

  handleComplete = () => {
    const { completed } = this.state
    completed[this.state.activeStep] = true
    this.setState({
      completed,
    })
    this.handleNext()
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    })
  }

  completedSteps() {
    return Object.keys(this.state.completed).length
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps()
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state
    return (
      <Container>
        <div className={classes.root}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  onClick={this.handleStep(index)}
                  completed={this.state.completed[index]}
                >
                  {document.documentElement.clientWidth >= 765 ? label : ''}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {this.allStepsCompleted() ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&quot;re finished
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <Grid container justify="center">
                <div>
                  <Grid className={classes.instructions}>{getStepContent(activeStep)}</Grid>
                  <div className={classes.buttonGroup}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Назад
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      Дальше
                    </Button>
                    {activeStep !== steps.length &&
                    (this.state.completed[this.state.activeStep] ? (
                      <Typography variant="caption" className={classes.completed}>
                        Шаг {activeStep + 1} уже завершен
                      </Typography>
                    ) : (
                      <Button variant="contained" color="primary" onClick={this.handleComplete}>
                        {this.completedSteps() === this.totalSteps() - 1 ? 'Создать пати' : 'Готово'}
                      </Button>
                    ))}
                  </div>
                </div>
              </Grid>
            )}
          </div>
        </div>
      </Container>
    )
  }
}

PartyCreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(PartyCreateScene))
