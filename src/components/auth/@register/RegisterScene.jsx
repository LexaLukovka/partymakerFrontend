import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import RegisterCard from './RegisterCard/index'
import Background from '../Background'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.size5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const RegisterScene = ({ classes }) =>
  <Background className={classes.root}>
    <RegisterCard />
  </Background>

RegisterScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterScene)
