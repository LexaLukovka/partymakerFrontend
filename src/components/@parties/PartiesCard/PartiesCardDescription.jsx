import React from 'react'
import { object, number, string, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const styles = {
  root: {},
}

const PartiesCardDescription = ({ classes, party }) =>
  <div className={classes.root}>
    <List>
      <ListItem>
        <ListItemText primary="Собирается" />
        <ListItemSecondaryAction>
          {`до ${party.people_max} человек`}
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
        <ListItemText primary="Описание" secondary={party.description} />
      </ListItem>
    </List>
  </div>

PartiesCardDescription.propTypes = {
  classes: object.isRequired,
  party: shape({
    amount: string,
    people_max: number.isRequired,
    address: object.isRequired,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(PartiesCardDescription)
