import React from 'react'
import { object, func } from 'prop-types'
import { withStyles, Card } from '@material-ui/core'
import CardHeader from './MyCardHeader'
import CardContent from './MyCardContent'
import CardActions from './MyCardActions'

const styles = {
  root: {
    marginBottom: 15,
    width: '100%',
    '@media only screen and (max-width: 320px)': {
      width: '95%',
    },
  },
}

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
