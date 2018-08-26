import React from 'react'
import { number, object, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles, CardContent, Typography, ListItemSecondaryAction, List, ListItem } from '@material-ui/core'

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
  list: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: '14pt',
  },
  listPrimary: {
    fontSize: '14pt',
    lineHeight: '1rem',
  },
}

const MyCardContent = ({ classes, party }) =>
  <CardContent className={classes.cardContent}>
    <List className={classes.list}>
      <ListItem disableGutters>
        <Typography variant="subheading"> Собирается:</Typography>
        <ListItemSecondaryAction>
          {`до ${party.people_max} человек`}
        </ListItemSecondaryAction>
      </ListItem>
      {
        party.amount &&
        <ListItem disableGutters>
          <Typography variant="subheading">Скидываться:</Typography>
          <ListItemSecondaryAction>
            {`${party.amount} грн`}
          </ListItemSecondaryAction>
        </ListItem>
      }
      {party.place ?
        <ListItem disableGutters>
          <Typography variant="subheading">Место:</Typography>
          <ListItemSecondaryAction>
            <Link to={`/places/${party.place.id}`}>
              <Typography variant="subheading" color="primary">{party.place.title}</Typography>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
        :
        <ListItem disableGutters>
          <Typography variant="subheading">Район:</Typography>
          <ListItemSecondaryAction>
            {party.address.district}
          </ListItemSecondaryAction>
        </ListItem>
      }
    </List>

    <Typography paragraph>
      {party.description}
    </Typography>

  </CardContent>

MyCardContent.propTypes = {
  classes: object.isRequired,
  party: shape({
    id: number,
    amount: string,
    primary_picture: string,
    people_max: number.isRequired,
    address: object,
    place: object,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(MyCardContent)
