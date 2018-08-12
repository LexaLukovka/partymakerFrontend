import React from 'react'
import { object, number, string, array, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Paper, ListItemSecondaryAction, ListItem, ListItemText, List, Typography, Button } from '@material-ui/core'
import shortTitle from 'utils/shortTitle'
import moment from 'moment'
import connector from '../connector'

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
    <Typography variant="title">{party.title}</Typography>
    <List>
      <ListItem disableGutters>
        <div className={classes.status} />
        <ListItemText primary={party.status} />
        <ListItemSecondaryAction className={classes.amount}>
          {party.admin.name}
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
      <Link to="/user/">
        <Button color="primary" size="small">Редактировать</Button>
      </Link>
      <ListItem disableGutters>
        <ListItemText primary="Адрес" secondary={shortTitle(party.address.address)} />
        <ListItemSecondaryAction>
          <a href={`http://www.google.com/maps/?q=${party.address.address}`}>
            <Button variant="contained" size="small" color="primary">Показать на карте</Button>
          </a>
        </ListItemSecondaryAction>
      </ListItem>
      <Button color="primary" size="small">Редактировать</Button>
      <ListItem disableGutters>
        <ListItemText
          primary="Приходить"
          secondary={moment(party.start_time)
            .fromNow()}
        />
        <Button color="primary" size="small">Редактировать</Button>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText
          primary="Собирается"
          secondary={`от ${party.people_min} до ${party.people_max} человек`}
        />
        <Button color="primary" size="small">Редактировать</Button>
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
        <Button color="primary" size="small">Редактировать</Button>
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
