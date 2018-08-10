import React from 'react'
import { object, number, string, array, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, ListItemSecondaryAction, ListItemText, List, Typography, Button } from '@material-ui/core'
import ListItem from './ListItem'
import connector from '../connector'
import shortTitle from 'utils/shortTitle'

const styles = theme => ({
  root: {
    marginBottom: 15,
    padding: 15,
  },

  amount: {
    color: theme.palette.primary.main,
    width: '45%',
    textAlign: 'right',
  },
  status: {
    width: 17,
    height: 17,
    background: theme.palette.primary.main,
    borderRadius: '50%',
  },
})

const PlaceCard = ({ classes, place }) =>
  <Paper className={classes.root}>
    <Typography align="center" variant="title">{place.title}</Typography>
    <List>
      <ListItem>
        <div className={classes.status} />
        <ListItemText primary={place.status} />
        <ListItemSecondaryAction className={classes.amount}>
          {place.admin.name}
        </ListItemSecondaryAction>
      </ListItem>
      {
        place.amount &&
        <ListItem>
          <ListItemText primary="Скидываться" />
          <ListItemSecondaryAction>
            {`${place.amount} грн`}
          </ListItemSecondaryAction>
        </ListItem>
      }
      <ListItem>
        <ListItemText primary="Район" />
        <ListItemSecondaryAction>
          {place.address.district}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Адрес" secondary={shortTitle(place.address.address)} />
        <ListItemSecondaryAction>
          <a href={`http://www.google.com/maps/?q=${place.address.address}`}>
            <Button variant="contained" size="small" color="primary">Показать на карте</Button>
          </a>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Описание" secondary={place.description} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Telegram"
          secondary={<a href={place.telegram_url}>{`${place.telegram_url.substring(0, 40)}...`}</a>}
        />
      </ListItem>
    </List>
  </Paper>

PlaceCard.propTypes = {
  classes: object.isRequired,
  place: shape({
    admin: object.isRequired,
    title: string.isRequired,
    address: shape({
      address: string.isRequired,
    }).isRequired,
    telegram_url: string.isRequired,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(connector(PlaceCard))
