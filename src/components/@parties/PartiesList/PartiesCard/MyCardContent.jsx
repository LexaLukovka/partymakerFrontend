import React from 'react'
import { number, object, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles, CardContent, Avatar, Typography } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const styles = {
  cardContent: {
    paddingTop: 0,
  },
  picture: {
    width: '100%',
    height: 200,
    paddingBottom: 20,
    borderRadius: 5,
  },
  title: {
    paddingTop: 10,
  },
}

const url = 'http://localhost:3333/images/parties.jpg'

const MyCardContent = ({ classes, party }) =>
  <CardContent className={classes.cardContent}>
    <Link to={`/parties/${party.id}`}>
      <Avatar
        src={isEmpty(party.primary_picture) ? url : party.primary_picture}
        className={classes.picture}
      />
    </Link>
    <Link to={`/parties/${party.id}`}>
      <Typography align="center" variant="title" color="primary" className={classes.title}>
        {party.title}
      </Typography>
    </Link>

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
  </CardContent>

MyCardContent.propTypes = {
  classes: object.isRequired,
  party: shape({
    id: number,
    amount: string,
    primary_picture: string,
    people_max: number.isRequired,
    address: object.isRequired,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(MyCardContent)
