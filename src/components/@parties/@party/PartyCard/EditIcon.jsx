import React from 'react'
import { object, number, string, array, shape, func, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import Create from 'mdi-react/CreateIcon'

const styles = {
  root: {},
}

const EditIcon = ({ classes, visible, party }) =>
  <div className={classes.icon}>
    {visible &&
    <Link to={`/parties/${party.id}/edit`}>
      <IconButton>
        <Create />
      </IconButton>
    </Link>
    }
  </div>

EditIcon.propTypes = {
  classes: object.isRequired,
  visible: bool.isRequired,
  party: shape({
    id: number,
  }).isRequired,
}

export default withStyles(styles)(EditIcon)
