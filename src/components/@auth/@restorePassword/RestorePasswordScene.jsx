import React from 'react'
import { object } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'
import RestoreForm from './RestoreForm'
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

class RestorePasswordScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props

    console.log(match.params.hash)

    document.title = 'Восстановление пароля - Partymaker'

    actions.layout.background('/images/forgot.jpg')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes, match } = this.props

    return (
      <Card className={classes.root}>
        <CardHeader className={classes.title} title="Восстановление пароля" />
        <RestoreForm hash={match.params.hash} />
      </Card>
    )
  }
}

RestorePasswordScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(RestorePasswordScene))
