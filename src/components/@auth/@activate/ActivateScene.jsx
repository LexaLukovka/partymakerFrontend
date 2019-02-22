import React from 'react'
import { bool, object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Card, CardHeader, Typography, withStyles } from '@material-ui/core'
import Loading from 'components/Loading'
import connector from './connector'

const styles = {
  root: {
    width: 350,
    padding: 20,
    border: 'solid',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    paddingBottom: 10,
    textAlign: 'center',
  },
}

class ActivateScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props

    document.title = 'Активация - Partymaker'

    actions.layout.background('/images/register.jpg')

    actions.activate(match.params.hash)
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes, loading, user, history } = this.props

    if (loading) return <Loading />

    if (user.active) history.push('/')

    return (
      <Card className={classes.root}>
        <CardHeader className={classes.title} title={user.active
          ? <Typography variant="h5" align="center">Активация прошла успешно</Typography>
          : <Typography variant="h5" align="center" color="error">Активация не успешна</Typography>}
        />
      </Card>
    )
  }
}

ActivateScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  history: object.isRequired,
  match: object.isRequired,
  loading: bool.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(withRouter(ActivateScene)))
