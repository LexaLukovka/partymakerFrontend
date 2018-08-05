import React from 'react'
import { object, number, string, array, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, ListItemSecondaryAction, ListItemText, List, Typography } from '@material-ui/core'
import ListItem from './ListItem'
import connector from '../connector'
import Button from '@material-ui/core/Button/Button'
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
      <ListItem>
        <div className={classes.status} />
        <ListItemText primary={party.status} />
        <ListItemSecondaryAction className={classes.amount}>
          {party.admin.name}
        </ListItemSecondaryAction>
      </ListItem>
      {
        party.amount &&
        <ListItem>
          <ListItemText primary="Скидываться" />
          <ListItemSecondaryAction>
            {`${party.amount} грн`}
          </ListItemSecondaryAction>
        </ListItem>
      }
      <ListItem>
        <ListItemText primary="Район" />
        <ListItemSecondaryAction>
          {party.address.district}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Адрес" secondary={shortTitle(party.address.address)} />
        <ListItemSecondaryAction>
          <a href={`http://www.google.com/maps/?q=${party.address.address}`}>
            <Button variant="contained" size="small" color="primary">Показать на карте</Button>
          </a>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Приходить"
          secondary={party.start_time}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Собирается"
          secondary={`от ${party.people_min} до ${party.people_max} человек`}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Общий стол"
          secondary={party.table}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Описание" secondary={party.description} />
      </ListItem>
      <ListItem>
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
