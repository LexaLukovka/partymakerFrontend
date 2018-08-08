import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Avatar } from '@material-ui/core'
import PictureUpload from './PictureUpload'
import formik from './formik'
import connector from '../connector'

const styles = {
  root: {
    paddingTop: 25,
    paddingRight: 10,
    paddingLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
  },
}

class AvatarScene extends React.Component {
  componentDidMount() {
    this.props.actions.header.setTitle('Аватар')
  }

  componentWillUnmount() {
    this.props.actions.header.resetTitle()
  }

  handleUpload = () => {}

  render() {
    const { classes, user, values } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="subheading">Сменить фото</Typography>
        {user.avatar_url && <Avatar src={user.avatar_url} className={classes.avatar} />}
        <PictureUpload
          name="picture"
          value={values.picture}
          onChange={this.handleUpload}
        />
      </div>
    )
  }
}


AvatarScene.propTypes = {
  classes: object.isRequired,
  values: object.isRequired,
  user: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(formik(AvatarScene)))
