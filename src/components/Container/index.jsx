import React from 'react'
import { object, string, node, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    paddingTop: 55,
    height: '100%',
    margin: '0 auto',
    maxWidth: 600,
    paddingLeft: theme.spacing.size2,
    paddingRight: theme.spacing.size2,
    '@media only screen and (max-width: 1280px)': {
      minWidth: '100%',
    },
    '@media only screen and (max-width: 320px)': {
      minWidth: '100%',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})

const Container = ({ children, className, classes }) =>
  <main className={`${classes.root} ${className}`}>
    {children}
  </main>

Container.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string,
}
Container.defaultProps = {
  className: '',
}

export default withStyles(styles)(Container)
