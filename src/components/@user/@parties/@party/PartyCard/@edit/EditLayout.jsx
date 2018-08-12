import React from 'react'
import { object, shape } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import EditScene from './EditScene'
import DistrictScene from './@district/DistrictScene'
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
