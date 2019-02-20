import React from 'react'
import Header from 'src/components/Header'
import { withStyles, Typography } from '@material-ui/core'
import { object } from 'prop-types'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  background: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: 'url(/images/summer.jpg)',
    height: '100%',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    flexGrow: 1,
    height: '100%',
    flexDirection: 'column',
  },
  headline: {
    textAlign: 'center',
    color: 'white',
  }
}
const Index = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.background}>
      <Header />
      <div className={classes.center}>
        <div className={classes.headline}>
          <Typography color="inherit" variant="h4">Соберем вечерику</Typography>
          <Typography color="inherit" variant="h1">ВМЕСТЕ</Typography>
        </div>
      </div>
    </div>
  </div>

Index.propTypes = {
  classes: object.isRequired
}
export default withStyles(styles)(Index)
