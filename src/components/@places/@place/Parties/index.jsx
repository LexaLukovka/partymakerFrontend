import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
import GroupsList from 'components/@group/GroupsScene/GroupsList'

const styles = () => ({
  root: {},
  foundText: {
    padding: 30,
    paddingTop: 0,
    paddingBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 15,
    maxWidth: 1300,
    margin: '0 auto',
    padding: '10px 5px',
  },
})

const Parties = ({ classes, groups: { group, loading } }) => {
  if (loading) return <Loading />
  if (isEmpty(group)) {
    return (
      <Typography gutterBottom className={classes.foundText}>
        Никто не собрался в этом месте...
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
        <GroupsList groups={group} />
      </div>
    </React.Fragment>
  )
}

Parties.propTypes = {
  classes: object.isRequired,
  groups: object.isRequired,

}

export default withStyles(styles)(Parties)
