import React, { Component } from 'react'
import { number, object, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Redirect, Route, Switch } from 'react-router-dom'
import qs from 'querystring'
import TypeScene from './@step1/TypeScene'
import GeneralScene from './@step2/GeneralScene'
import SummaryScene from './@step3/SummaryScene'
import Stepper from './Stepper'
import connector from './connector'
import isEmpty from 'lodash/isEmpty'

const styles = () => ({
  root: {
    height: '100%',
    width: 'auto',
  },
})

class CreateLayout extends Component {
  componentDidMount() {
    const { place, actions, history, location: { search } } = this.props
    const { place_id } = qs.parse(search.replace('?', ''))

    if (!isEmpty(place) && place.type && place_id) {
      actions.partyTypes.select(place.type)
      actions.party.update({ place, type: place.type })
      history.push('/parties/create/step/2')
    }
  }

  render() {
    const { classes, party } = this.props
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
}

CreateLayout.propTypes = {
  classes: object.isRequired,
  place: object.isRequired,
  actions: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  party: shape({
    activeStep: number,
  }).isRequired,
}

export default withStyles(styles)(connector(CreateLayout))
