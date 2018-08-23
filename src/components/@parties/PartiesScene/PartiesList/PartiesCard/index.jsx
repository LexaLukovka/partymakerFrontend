import React from 'react'
import { object, func } from 'prop-types'
import { withStyles, Card } from '@material-ui/core'
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

class PartiesCard extends React.Component {
  like = (id) => this.props.onLike(id)


  render() {
    const { classes, party } = this.props
    return (
      <Card className={classes.root}>
        <CardHeader party={party} />
        <CardContent party={party} />
        <CardActions party={party} onLike={this.like} />
      </Card>
    )
  }
}

PartiesCard.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
  onLike: func,
}

PartiesCard.defaultProps = {
  onLike: () => {},
}

export default withStyles(styles)(PartiesCard)
