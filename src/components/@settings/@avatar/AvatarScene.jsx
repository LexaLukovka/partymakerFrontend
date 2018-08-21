import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Avatar } from '@material-ui/core'
import PictureUpload from './PictureUpload'
import ArrowForwardIcon from 'mdi-react/ArrowForwardIcon'
import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
  },
  avatar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  photo: {
    width: 70,
    height: 70,
  },
  arrow: {
    alignSelf: 'center',
  },
  upload: {
    marginTop: 10,
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
    document.title = 'Изменить аватар'
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
        <Typography align="center" variant="title">Сменить фото</Typography>
        <div className={classes.avatar}>
          {user.avatar_url && <Avatar src={user.avatar_url} className={classes.photo} />}
          <ArrowForwardIcon className={classes.arrow} />
          <PictureUpload
            name="picture"
            onChange={this.handleUpload}
          />
        </div>
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
