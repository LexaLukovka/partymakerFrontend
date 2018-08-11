import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import Typography from '@material-ui/core/Typography/Typography'
import PartiesList from 'components/@parties/PartiesList'


const styles = () => ({
  root: {},
  foundText: {
    padding: 30,
    paddingTop: 0,
    paddingBottom: 15,
    fontStyle: 'italic',
  },
  cards: {
    padding: '10px 5px',
  },
})

const Parties = ({ classes, parties }) => {
  if (parties.loading) return <Loading />
  if (isEmpty(parties.parties)) {
    return (
      <Typography gutterBottom className={classes.foundText}>
        Никто не проводит вечеринку в этом месте...
      </Typography>
    )
  }
  return (
    <React.Fragment>
      <Typography gutterBottom className={classes.foundText}>
        Вот мы нашли вечеринки которые уже проводятся в этом
        месте...
      </Typography>
      <div className={classes.cards}>
        <PartiesList parties={parties.parties} />
      </div>
    </React.Fragment>
  )
}

Parties.propTypes = {
  classes: PropTypes.object.isRequired,
  parties: PropTypes.object.isRequired,

}

export default withStyles(styles)(Parties)
