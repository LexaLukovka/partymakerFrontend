import React from 'react'
import { node, object, string } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'

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

const AuthCard = ({ classes, children, documentTitle, title }) =>
  <React.Fragment>
    {documentTitle && <Helmet>
      <title>{documentTitle}</title>
    </Helmet>}
    <Card className={classes.root}>
      <CardHeader className={classes.title} title={title} />
      {children}
    </Card>
  </React.Fragment>

AuthCard.propTypes = {
  children: node,
  title: node.isRequired,
  classes: object.isRequired,
  documentTitle: string.isRequired,
}

AuthCard.defaultProps = {
  children: null,
}

export default withStyles(styles)(AuthCard)
