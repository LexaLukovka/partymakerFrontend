import React from 'react'
import { number, object, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { CardContent, List, ListItem, ListItemSecondaryAction, Typography, withStyles } from '@material-ui/core'
import shortTitle from 'utils/shortTitle'

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

const MyCardContent = ({ classes, group }) =>
  <CardContent className={classes.cardContent}>
    <List className={classes.list}>
      <Link to={`/group/${group.id}`}>
        <ListItem disableGutters>
          <Typography variant="subheading">Что будет?</Typography>
          <ListItemSecondaryAction>
            <Typography variant="title">
              {group.title}
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </Link>
      {group.place ?
        <ListItem disableGutters>
          <Typography variant="subheading">Место:</Typography>
          <ListItemSecondaryAction>
            <Link to={`/places/${group.place.id}`}>
              <Typography variant="subheading" color="primary">{group.place.title}</Typography>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
        :
        <ListItem disableGutters>
          <Typography variant="subheading">Адрес:</Typography>
          <ListItemSecondaryAction>
            {shortTitle(group.address.address)}
          </ListItemSecondaryAction>
        </ListItem>
      }
    </List>

    <Typography paragraph>
      {group.description}
    </Typography>

  </CardContent>

MyCardContent.propTypes = {
  classes: object.isRequired,
  group: shape({
    id: number,
    address: object,
    place: object,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(MyCardContent)
