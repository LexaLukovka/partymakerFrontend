import React from 'react'
import { node, object, string } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'
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

class AuthCard extends React.Component {
  componentDidMount() {
    const { actions, images, documentTitle } = this.props

    document.title = documentTitle

    actions.layout.background(`/images/${images}`)
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes, children, title } = this.props

    return (
      <Card className={classes.root}>
        <CardHeader className={classes.title} title={title} />
        {children}
      </Card>
    )
  }
}

AuthCard.propTypes = {
  title: node.isRequired,
  children: node.isRequired,
  images: string.isRequired,
  classes: object.isRequired,
  actions: object.isRequired,
  documentTitle: string.isRequired,
}

export default withStyles(styles)(connector(AuthCard))
