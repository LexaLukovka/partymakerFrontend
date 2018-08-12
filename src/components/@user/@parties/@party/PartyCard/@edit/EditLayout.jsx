import React from 'react'
import { object, shape } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import EditScene from './EditScene'
import DistrictScene from './@district/DistrictScene'
import AddressScene from './@address/AddressScene'
import StartTimeScene from './@startTime/StartTimeScene'
import PeopleScene from './@people/PeopleScene'
import DescriptionScene from './@description/DescriptionScene'
import connector from '../../connector'

const styles = () => ({
  root: {
    height: '100%',
  },
})

class EditLayout extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Switch>
          <Route exact path="/user/parties/:id/edit" component={EditScene} />
          <Route exact path="/user/parties/:id/edit/district" component={DistrictScene} />
          <Route exact path="/user/parties/:id/edit/address" component={AddressScene} />
          <Route exact path="/user/parties/:id/edit/startTime" component={StartTimeScene} />
          <Route exact path="/user/parties/:id/edit/people" component={PeopleScene} />
          <Route exact path="/user/parties/:id/edit/description" component={DescriptionScene} />
        </Switch>
      </div>
    )
  }
}

EditLayout.propTypes = {
  classes: object.isRequired,
  actions: shape({
    header: object,
  }).isRequired,
}

export default withStyles(styles)(connector(EditLayout))
