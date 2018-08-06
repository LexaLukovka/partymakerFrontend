import React from 'react'
import { object, func } from 'prop-types'
import { withStyles, Card } from '@material-ui/core'
import CardHeader from './Card/MyCardHeader'
import CardContent from './Card/MyCardContent'
import CardActions from './Card/MyCardActions'
import connector from '../connector'

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
  handleLikeClick = (id) => {
    this.props.actions.like.like(id)
  }

  render() {
    const { classes, party } = this.props
    return (
      <Card className={classes.root}>
        <CardHeader party={party} />
        <CardContent party={party} />
        <CardActions party={party} onLike={() => this.handleLikeClick(party.id)} />
      </Card>
    )
  }
}

PartiesCard.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(PartiesCard))
