/* eslint-disable prefer-destructuring,react/prefer-stateless-function */
import React from 'react'
import { object, shape, number } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Redirect, Route, Switch } from 'react-router-dom'
import GeneralForm from './GeneralForm/index'
import TypeForm from './TypeForm/index'
import SummaryForm from './SummaryForm/index'
import Stepper from './Stepper/index'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100%',
    width: 'auto',
  },
})

class CreateLayout extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
  }

  render() {
    const { classes, party } = this.props
    return (
      <div className={classes.root}>
        <Stepper step={party.activeStep} />
        <Switch>
          <Route path="/parties/create/step/1" exact component={TypeForm} />
          <Route path="/parties/create/step/2" exact component={GeneralForm} />
          <Route path="/parties/create/step/3" exact component={SummaryForm} />
          <Redirect to="/parties/create/step/1" />
        </Switch>
      </div>
    )
  }
}

CreateLayout.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  party: shape({
    activeStep: number,
  }).isRequired,
}

export default (withStyles(styles)(connector(CreateLayout)))
