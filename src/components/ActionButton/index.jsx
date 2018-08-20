import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import AddIcon from 'mdi-react/AddIcon'
import connector from './connector'

const styles = {
  root: {
    position: 'fixed',
    bottom: 15,
    right: 15,
  },
}

const ActionButton = ({ classes, actionButton }) => actionButton.isVisible &&
  <div className={classes.root}>
    <Link to={actionButton.to}>
      <Button
        variant="fab"
        color="primary"
        aria-label="Add"
        className={classes.button}
      >
        <AddIcon />
      </Button>
    </Link>
  </div>

ActionButton.propTypes = {
  classes: object.isRequired,
  actionButton: object.isRequired,
}

export default withStyles(styles)(connector(ActionButton))
