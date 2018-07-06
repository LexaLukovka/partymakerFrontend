import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/es/Typography/Typography'
import Button from '@material-ui/core/es/Button/Button'

const styles = theme => ({
  root: {
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // color: theme.palette.common.white,
    background: theme.palette.primary.main,
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  main: {
    textAlign: 'center',
  },
  text: {
    color: theme.palette.common.white,
  },
  color: {
    '&::-webkit-input-placeholder': {
      color: theme.palette.error.dark,
    },
    color: theme.palette.error.dark,
  },

})

const CreatedScene = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.main}>
      <Typography
        gutterBottom
        className={classes.text}
        align="center"
        variant="subheading"
      >
        Thank you. Cargo created
      </Typography>

      <a href="/cargo/create">
        <Button variant="raised" color="primary">add another cargo</Button>
      </a>
    </div>
  </div>

CreatedScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CreatedScene)
