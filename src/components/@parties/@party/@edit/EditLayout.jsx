import React from 'react'
import { object, shape } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import EditScene from './EditScene'
import TitleScene from './@title/TitleScene'
import DistrictScene from './@district/DistrictScene'
import AddressScene from './@address/AddressScene'
import StartTimeScene from './@startTime/StartTimeScene'
import PeopleScene from './@people/PeopleScene'
import DescriptionScene from './@description/DescriptionScene'
import ImageScene from './@image/ImageScene'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100%',
  },
})

class EditLayout extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Switch>
          <Route exact path="/parties/:id/edit" component={EditScene} />
          <Route exact path="/parties/:id/edit/title" component={TitleScene} />
          <Route exact path="/parties/:id/edit/district" component={DistrictScene} />
          <Route exact path="/parties/:id/edit/address" component={AddressScene} />
          <Route exact path="/parties/:id/edit/startTime" component={StartTimeScene} />
          <Route exact path="/parties/:id/edit/people" component={PeopleScene} />
          <Route exact path="/parties/:id/edit/description" component={DescriptionScene} />
          <Route exact path="/parties/:id/edit/image" component={ImageScene} />
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
