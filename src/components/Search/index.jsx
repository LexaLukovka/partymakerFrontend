import React from 'react'
import { object } from 'prop-types'
import { Button, TextField, withStyles } from '@material-ui/core'

const styles = () => ({
  root: {
    display: 'flex',
  },
})

const Search = ({ classes }) =>
  <div className={classes.root}>
    <TextField
      fullWidth
      placeholder="Например: Пляж, Кафе, Спокойный отдых"
    />
    <Button color="primary">Искать</Button>
  </div>

Search.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Search)
