import React from 'react'
import { number, object, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Redirect, Route, Switch } from 'react-router-dom'
import TypeScene from './@step1/TypeScene'
import GeneralScene from './@step2/GeneralScene'
import SummaryScene from './@step3/SummaryScene'
import Stepper from './Stepper'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100%',
    width: 'auto',
  },
})

function CreateLayout(props) {
  const { classes, party } = props
  return (
    <div className={classes.root}>
      <Stepper step={party.activeStep} />
      <Switch>
        <Route path="/parties/create/step/1" exact component={TypeScene} />
        <Route path="/parties/create/step/2" exact component={GeneralScene} />
        <Route path="/parties/create/step/3" exact component={SummaryScene} />
        <Redirect to="/parties/create/step/1" />
      </Switch>
    </div>
  )
}

CreateLayout.propTypes = {
  classes: object.isRequired,
  party: shape({
    activeStep: number,
  }).isRequired,
}

export default withStyles(styles)(connector(CreateLayout))
