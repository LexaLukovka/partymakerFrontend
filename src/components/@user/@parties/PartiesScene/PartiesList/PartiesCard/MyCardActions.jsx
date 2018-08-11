/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { object, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { CardActions, FormControlLabel, Checkbox, IconButton, Button } from '@material-ui/core'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'
import Share from '@material-ui/icons/Share'


const styles = {
  actions: {
    display: 'flex',
    marginTop: -30,
  },
  flex: {
    flexGrow: 1,
    marginLeft: 30,
  },
}

const MyCardActions = ({ classes, party, onLike }) =>
  <CardActions className={classes.actions} disableActionSpacing>
    <div className={classes.flex}>
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="primary" />}
            value="checked"
            onClick={onLike}
          />}
        label="0"
      />
      <IconButton aria-label="Share">
        <Share />
      </IconButton>
    </div>
    <Link to={`/user/parties/${party.id}`}>
      <Button color="primary">Подробнее</Button>
    </Link>
  </CardActions>

MyCardActions.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
  onLike: func.isRequired,
}

export default withStyles(styles)(MyCardActions)
