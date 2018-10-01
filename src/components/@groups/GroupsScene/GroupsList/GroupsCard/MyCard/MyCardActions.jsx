/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Button, CardActions, IconButton } from '@material-ui/core'

import Share from 'mdi-react/ShareIcon'

const styles = {
  actions: {
    display: 'flex',
    marginTop: -30,
  },
  flex: {
    flexGrow: 1,
  },
}

const MyCardActions = ({ classes, group }) =>
  <CardActions className={classes.actions} disableActionSpacing>
    <div className={classes.flex}>
      <IconButton aria-label="Share">
        <Share />
      </IconButton>
    </div>
    <Link to={`/group/${group.id}`}>
      <Button color="primary">Подробнее</Button>
    </Link>
  </CardActions>

MyCardActions.propTypes = {
  classes: object.isRequired,
  group: object.isRequired,
}

export default withStyles(styles)(MyCardActions)
