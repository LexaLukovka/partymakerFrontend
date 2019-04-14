import React from 'react'
import { node, object, string } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'
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
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
    textAlign: 'center',
  },
}

class AuthCard extends React.Component {
  componentDidMount() {
    const { actions, images } = this.props
    actions.layout.background(`/images/${images}`)
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes, children, documentTitle, title } = this.props

    return (
      <React.Fragment>
        {documentTitle && <Helmet>
          <title>{documentTitle}</title>
        </Helmet>}
        <Card className={classes.root}>
          <CardHeader className={classes.title} title={title} />
          {children}
        </Card>
      </React.Fragment>
    )
  }
}

AuthCard.propTypes = {
  children: node,
  title: node.isRequired,
  images: string.isRequired,
  classes: object.isRequired,
  actions: object.isRequired,
  documentTitle: string.isRequired,
}

AuthCard.defaultProps = {
  children: null,
}

export default withStyles(styles)(connector(AuthCard))
