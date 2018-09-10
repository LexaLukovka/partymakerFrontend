import React from 'react'
import { func, object } from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseCircleIcon from 'mdi-react/CloseCircleIcon'
import IconButton from '@material-ui/core/IconButton/IconButton'

const styles = () => ({
  root: {
    padding: '5px 0',
  },
  place: {
    backgroundPosition: 'center',
    padding: '5px 15px',
    color: 'white',
    textShadow: '0 1px 15px black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const PlaceInput = ({ classes, place, onCancel }) =>
  <div className={classes.root}>
    <Typography variant="subheading">Место:</Typography>
    <Paper
      className={classes.place}
      style={{ backgroundImage: `url('${place.pictures[0].url}')` }}
    >
      <Link to={`/places/${place.id}`}>
        <Typography color="inherit" variant="title">
          {place.title}
        </Typography>
      </Link>
      <IconButton color="inherit">
        <CloseCircleIcon onClick={onCancel} />
      </IconButton>
    </Paper>
  </div>

PlaceInput.propTypes = {
  classes: object.isRequired,
  place: object.isRequired,
  onCancel: func.isRequired,
}

export default withStyles(styles)(PlaceInput)
