import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core/'

const styles = () => ({
  root: {
    display: 'flex',
    marginTop: 20,
  },
  sort: {
    fontWeight: 555,
  },
  line: {
    textDecoration: 'underline',
  },
})
const Sort = ({ classes }) =>
  <div className={classes.root}>
    <Typography className={classes.sort}>Сортировать:</Typography>
    <Typography>&nbsp;по рейтингу</Typography>
    <Typography className={classes.line}>&nbsp;по просмотрам</Typography>
    <Typography>&nbsp;по цене</Typography>
  </div>

Sort.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Sort)
