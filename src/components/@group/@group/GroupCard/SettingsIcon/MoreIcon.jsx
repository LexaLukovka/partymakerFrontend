/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { bool, number, object, shape } from 'prop-types'
import { Link } from 'react-router-dom'
import { IconButton, Menu, MenuItem, withStyles } from '@material-ui/core'
import MoreVert from 'mdi-react/MoreVertIcon'
import Create from 'mdi-react/CreateIcon'
import Delete from 'mdi-react/DeleteIcon'
import DialogDelete from './DialogDelete'
import connector from './connector'

const styles = {
  menuItem: {
    '&:focus': {
      outline: 'none',
    },
  },
  item: {
    marginLeft: 5,
  },
  icons: {
    width: 30,
    marginRight: 5,
  },
}

class MoreIcon extends React.Component {
  state = {
    isOpen: null,
  }

  handleClick = event => {
    this.setState({
      isOpen: event.currentTarget,
    })
  }
  handleClose = () => {
    this.setState({
      isOpen: null,
    })
  }

  handleOpenDelete = () => {
    const { actions } = this.props
    actions.delete.open()
  }

  render() {
    const { classes, visible, group } = this.props
    const { isOpen } = this.state
    return (
      <div className={classes.icon}>
        {visible &&
        <IconButton onClick={this.handleClick}>
          <MoreVert />
        </IconButton>
        }
        <Menu anchorEl={isOpen} open={Boolean(isOpen)} onClose={this.handleClose}>
          <div className={classes.menuItem} onClick={this.handleClose}>
            <MenuItem component={Link} to={`/group/${group.id}/edit`}>
              <IconButton className={classes.icons}>
                <Create />
              </IconButton>
              Редактировать
            </MenuItem>
            <MenuItem onClick={this.handleOpenDelete}>
              <IconButton className={classes.icons}>
                <Delete />
              </IconButton>
              Удалить
            </MenuItem>
          </div>
        </Menu>
        <DialogDelete group={group} />
      </div>
    )
  }
}

MoreIcon.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  visible: bool.isRequired,
  group: shape({
    id: number,
  }).isRequired,
}

export default withStyles(styles)(connector(MoreIcon))
