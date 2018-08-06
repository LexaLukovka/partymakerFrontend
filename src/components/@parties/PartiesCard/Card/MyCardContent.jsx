import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles, CardContent, Avatar, Typography } from '@material-ui/core'
import PartiesCardDescription from 'components/@parties/PartiesCard/PartiesCardDescription'
import isEmpty from 'lodash/isEmpty'

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
    <PartiesCardDescription party={party} />
  </CardContent>

MyCardContent.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(MyCardContent)
