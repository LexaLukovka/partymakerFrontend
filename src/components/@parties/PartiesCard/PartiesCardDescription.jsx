import React from 'react'
import { object, number, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const styles = theme => ({
  root: {},
})

const PartiesCardDescription = ({ classes, amount, count, address, description }) =>
  <div className={classes.root}>
    <List>
      <ListItem>
        <ListItemText primary="Собирается" />
        <ListItemSecondaryAction>
          {`${count} человек`}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Скидываться" />
        <ListItemSecondaryAction>
          {`${amount} грн`}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Адрес" secondary={address} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Описание" secondary={description} />
      </ListItem>
    </List>
  </div>

PartiesCardDescription.propTypes = {
  classes: object.isRequired,
  amount: number.isRequired,
  count: number.isRequired,
  address: string.isRequired,
  description: string.isRequired,
}

export default withStyles(styles)(PartiesCardDescription)
