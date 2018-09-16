import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import CreateScene from './@create/CreateScene'
import GroupScene from 'components/@group/@group/GroupScene'

import qs from 'querystring'
import connector from './connector'

const styles = () => ({
  root: {
    height: '96%',
  },
})

class GroupLayout extends React.Component {
  componentDidMount() {
    const { actions, location: { search } } = this.props
    const { place_id } = qs.parse(search.replace('?', ''))
    actions.place.show(place_id)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Switch>
          <Route path="/group/create" exact component={CreateScene} />
          <Route exact path="/group/:id" component={GroupScene} />
        </Switch>
      </div>
    )
  }
}

GroupLayout.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  location: object.isRequired,
}

export default withStyles(styles)(connector(GroupLayout))
