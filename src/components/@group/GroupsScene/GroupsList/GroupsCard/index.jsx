import React from 'react'
import { object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'
import CardContent from './MyCard/MyCardContent'
import CardActions from './MyCard/MyCardActions'

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
    <CardContent group={group} />
    <CardActions group={group} />
  </Card>

PartiesCard.propTypes = {
  classes: object.isRequired,
  group: object.isRequired,
}

export default withStyles(styles)(PartiesCard)
