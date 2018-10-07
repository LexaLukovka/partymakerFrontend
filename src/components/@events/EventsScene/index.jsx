import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Search from 'components/Search'
import Sort from 'components/Sort'
import InfiniteEvents from './InfiniteEvents'

const styles = () => ({
  search: {
    maxWidth: 1300,
    margin: '0 auto',
    padding: 40,
    paddingBottom: 0,
  },
})

const EvenetsScene = ({ classes }) =>
  <React.Fragment>
    <div className={classes.search}>
      <Search />
      <Sort />
    </div>
    <InfiniteEvents />
  </React.Fragment>

EvenetsScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(EvenetsScene)
