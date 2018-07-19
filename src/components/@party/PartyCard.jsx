import React from 'react'
import { object, number, string, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import connector from './connector'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    marginBottom: 15,
    paddingRight: 15,
  },
  amount: {
    color: theme.palette.primary.main,
    borderRadius: 30,
  },
})

const PartyCard = ({ classes, party }) =>
  <Paper className={classes.root}>
    <List>
      <ListItem>
        <ListItemText primary="Скидываться" />
        <ListItemSecondaryAction className={classes.amount}>
          {`${party.amount} грн`}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Адрес" secondary={party.address} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Приходить"
          secondary={party.dateTime}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Собирается"
          secondary={`${party.people_count} человек`}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Общий стол"
          secondary={party.table.join(', ')}
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
    amount: number.isRequired,
    people_count: number.isRequired,
    address: string.isRequired,
    description: string.isRequired,
    dateTime: string.isRequired,
    telegram_url: string,
  }).isRequired,

}

export default withStyles(styles)(connector(PartyCard))
