import React from 'react'
import { string } from 'prop-types'
import { Button, CardActions, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const AuthCardActions = ({ textButton, linkTo, textLink }) =>
  <CardActions className="flexAround">
    <Button variant="contained" type="submit" color="primary">
      {textButton}
    </Button>
    {linkTo && (
      <Link to={linkTo}>
        <Typography color="inherit">{textLink}</Typography>
      </Link>
    )}
  </CardActions>

AuthCardActions.propTypes = {
  textButton: string.isRequired,
  linkTo: string,
  textLink: string,
}

export default AuthCardActions
