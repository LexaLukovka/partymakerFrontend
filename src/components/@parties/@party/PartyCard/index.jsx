import React from 'react'
import { object, number, string, shape } from 'prop-types'
import { object, number, string, array, shape } from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import { Paper, ListItemSecondaryAction, ListItem, ListItemText, List, Typography, Button } from '@material-ui/core'
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

const PartyCard = ({ classes, party }) =>
  <Paper className={classes.root}>
    <Typography align="center" variant="title">{party.title}</Typography>
    <List>
      <ListItem disableGutters>
        <div className={classes.status} />
        <ListItemText primary={party.status} />
        <ListItemSecondaryAction className={classes.amount}>
          <Link to={`/users/${party.admin.id}`}>
            {party.admin.name}
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
      {
        party.amount &&
        <ListItem disableGutters>
          <ListItemText primary="Скидываться" />
          <ListItemSecondaryAction>
            {`${party.amount} грн`}
          </ListItemSecondaryAction>
        </ListItem>
      }
      <ListItem disableGutters>
        <ListItemText primary="Район" />
        <ListItemSecondaryAction>
          {party.address.district}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText primary="Адрес" secondary={shortTitle(party.address.address)} />
        <ListItemSecondaryAction>
          <a href={`http://www.google.com/maps/?q=${party.address.address}`}>
            <Button size="small" color="primary">на карте</Button>
          </a>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText
          primary="Приходить"
          secondary={moment(party.start_time)
            .fromNow()}
        />
      </ListItem>
      <ListItem disableGutters>
        <ListItemText
          primary="Собирается"
          secondary={`от ${party.people_min} до ${party.people_max} человек`}
        />
        <ListItemSecondaryAction>
          <Link to={`/parties/${party.id}/users`}>
            <Button size="small" color="primary">участники</Button>
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
      {
        party.table &&
        <ListItem disableGutters>
          <ListItemText
            primary="Общий стол"
            secondary={party.table}
          />
        </ListItem>
      }
      <ListItem disableGutters>
        <ListItemText primary="Описание" secondary={party.description} />
      </ListItem>
      <ListItem disableGutters>
        <ListItemText
          primary="Telegram"
          secondary={<a href={party.telegram_url}>{`${party.telegram_url.substring(0, 40)}...`}</a>}
        />
      </ListItem>
    </List>
  </Paper>

PartyCard.propTypes = {
  classes: object.isRequired,
  party: shape({
    admin: object.isRequired,
    title: string.isRequired,
    status: string.isRequired,
    people_min: number.isRequired,
    people_max: number.isRequired,
    address: shape({
      address: string.isRequired,
    }).isRequired,
    start_time: string.isRequired,
    telegram_url: string.isRequired,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(connector(PartyCard))
