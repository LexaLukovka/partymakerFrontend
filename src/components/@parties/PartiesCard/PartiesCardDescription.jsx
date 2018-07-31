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

const PartiesCardDescription = ({ classes, amount, maxCount, address, description }) =>
  <div className={classes.root}>
    <List>
      <ListItem>
        <ListItemText primary="Собирается" />
        <ListItemSecondaryAction>
          {`до ${maxCount} человек`}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Скидываться" />
        <ListItemSecondaryAction>
          {`${amount} грн`}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Район" />
        <ListItemSecondaryAction>
          {address.district}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Описание" secondary={description} />
      </ListItem>
    </List>
  </div>

PartiesCardDescription.propTypes = {
  classes: object.isRequired,
  amount: string.isRequired,
  maxCount: number.isRequired,
  address: object.isRequired,
  description: string.isRequired,
}

export default withStyles(styles)(PartiesCardDescription)
