import React from 'react'
import { object, number, string, array, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, ListItemSecondaryAction, ListItemText, ListItem, List, Typography, Grid } from '@material-ui/core'
import connector from '../connector'

const styles = theme => ({
  root: {
    marginBottom: 15,
    paddingRight: 15,
  },
  amount: {
    color: theme.palette.primary.main,
    borderRadius: 30,
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
    <List>
      <ListItem>
        <ListItemText>
          <Grid container justify="center">
            <Typography variant="title">{party.title}</Typography>
          </Grid>
        </ListItemText>
      </ListItem>
      <ListItem>
        <div className={classes.status} />
        <ListItemText primary={party.status} />
        <ListItemSecondaryAction>
          {party.admin.name}
        </ListItemSecondaryAction>
      </ListItem>
      {
        party.amount &&
        <ListItem>
          <ListItemText primary="Скидываться" />
          <ListItemSecondaryAction className={classes.amount}>
            {`${party.amount} грн`}
          </ListItemSecondaryAction>
        </ListItem>
      }
      <ListItem>
        <ListItemText primary="Адрес" secondary={party.address.address} />
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
