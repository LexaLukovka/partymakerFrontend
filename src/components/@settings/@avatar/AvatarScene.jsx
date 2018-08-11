import React from 'react'
import { func, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Avatar } from '@material-ui/core'
import PictureUpload from './PictureUpload'
import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 10,
    paddingLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: theme.spacing.size3,
  },
})

class AvatarScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
    actions.header.setTitle('Аватар')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
    actions.header.resetTitle()
  }

  handleUpload = (name, value) => {
    const { actions } = this.props
    actions.settings.change({ avatar_url: value[0] })
  }

  render() {
    const { classes, user } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="subheading">Сменить фото</Typography>
        {user.avatar_url && <Avatar src={user.avatar_url} className={classes.avatar} />}
        <PictureUpload
          name="picture"
          onChange={this.handleUpload}
        />
      </div>
    )
  }
}

AvatarScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
  actions: object.isRequired,
}

export default connector(withStyles(styles)(AvatarScene))
