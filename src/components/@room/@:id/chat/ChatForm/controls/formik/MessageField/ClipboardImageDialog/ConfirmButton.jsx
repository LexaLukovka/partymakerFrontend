import React from 'react'
import { object, bool, func } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import Loading from 'components/elements/Loading'

const styles = {
  root: {
    marginLeft: 8,
    marginRight: 5,
  },
  loading: {
    marginRight: 3,
  },
}

const ConfirmButton = ({ classes, isLoading, onClick }) =>
  <Button
    className={classes.root}
    onClick={onClick}
    variant="contained"
    color="primary"
    autoFocus
  >
    {isLoading && (
      <Loading
        className={classes.loading}
        color="inherit"
        debounce={0}
        size={16}
      />
    )}
    Отправить
  </Button>

ConfirmButton.propTypes = {
  classes: object.isRequired,
  isLoading: bool.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(ConfirmButton)
