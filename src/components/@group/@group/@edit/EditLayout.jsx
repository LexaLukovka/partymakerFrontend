import React from 'react'
import { object, shape } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import EditScene from './EditScene'
import TitleScene from './@title/TitleScene'
import AddressScene from './@address/AddressScene'
import DateScene from './@date/DateScene'
import DescriptionScene from './@description/DescriptionScene'
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
          <Route exact path="/group/:id/edit" component={EditScene} />
          <Route exact path="/group/:id/edit/title" component={TitleScene} />
          <Route exact path="/group/:id/edit/address" component={AddressScene} />
          <Route exact path="/group/:id/edit/startTime" component={DateScene} />
          <Route exact path="/group/:id/edit/description" component={DescriptionScene} />
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
