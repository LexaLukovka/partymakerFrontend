import React from 'react'
import { object } from 'prop-types'
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

const PartiesCard = ({ classes, group }) =>
  <Card className={classes.root}>
    <CardHeader group={group} />
    <Link to={`/group/${group.id}`}>
      <CardMediaContainer group={group} />
    </Link>
    <CardContent group={group} />
    <CardActions group={group} />
  </Card>

PartiesCard.propTypes = {
  classes: object.isRequired,
  group: object.isRequired,
}

export default withStyles(styles)(PartiesCard)
