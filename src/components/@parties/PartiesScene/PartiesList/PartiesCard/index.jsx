import React from 'react'
import { func, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CardMediaContainer from './CardMediaContainer'
import CardHeader from './MyCardHeader'
import CardContent from './MyCardContent'
import CardActions from './MyCardActions'

const styles = theme => ({
  root: {
    width: '95%',
    maxWidth: 400,
    margin: 5,
    [theme.breakpoints.up('sm')]: {
      margin: 15,
    },
  },
})

const PartiesCard = ({ classes, party }) =>
  <Card className={classes.root}>
    <CardHeader party={party} />
    <Link to={`/parties/${party.id}`}>
      <CardMediaContainer party={party} />
    </Link>
    <CardContent party={party} />
    <CardActions party={party} />
  </Card>

PartiesCard.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(PartiesCard)
