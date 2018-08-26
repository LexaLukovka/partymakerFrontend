import React from 'react'
import { object, string, node, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    paddingTop: 55,
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingTop: 64,
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
