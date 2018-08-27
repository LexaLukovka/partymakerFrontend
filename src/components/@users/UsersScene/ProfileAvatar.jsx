/* eslint-disable no-return-assign */
import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Avatar, FormControl, LinearProgress } from '@material-ui/core'
import AddIcon from 'mdi-react/AddIcon'
import initialsFromUsername from 'utils/initialsFromUsername'
import Http from 'services/Http'

const styles = theme => ({
  root: {
    width: 80,
    height: 80,
    fontSize: 40,
  },
  fileInput: {
    opacity: 0,
    position: 'absolute',
  },
  add: {
    top: 55,
    left: 55,
    position: 'absolute',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
  },
})

class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent: 0,
    }

    this.handleClickInput = this.handleClickInput.bind(this)
  }

  upload = async (image) => {
    const { actions, match } = this.props

    clearTimeout(this.timeout)
    this.setState({ percent: 0 })

    // noinspection JSUnusedGlobalSymbols
    const config = {
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        this.setState({ percent })
      },
    }

    const formData = new FormData()
    formData.append('image', image, config)
    const response = await Http.post(this.props.url, formData)

    await actions.settings.change({ avatar_url: response.url })
    actions.user.find(match.params.id)

    this.setState({ percent: 100 })

    this.timeout = setTimeout(() => this.setState({ percent: 0 }), 300)
  }

  handleChange = async (e) => {
    const image = e.target.files[0]
    await this.upload(image)
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  handleClickInput() {
    this.fileInput.click()
  }

  showFullAvatar = (avatar_url) => () => {
    const { actions } = this.props
    actions.pictureModal.show(avatar_url)
  }

  render() {
    const { classes, user, name } = this.props
    return (
      <FormControl>
        <Avatar className={classes.root} src={user.avatar_url} onClick={this.showFullAvatar(user.avatar_url)}>
          {user.avatar_url ? null : initialsFromUsername(user.name)}
        </Avatar>
        <AddIcon className={classes.add} onClick={this.handleClickInput} />
        <input
          className={classes.fileInput}
          ref={input => this.fileInput = input}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          name={name}
          type="file"
        />
        {this.state.percent ?
          <LinearProgress color="secondary" variant="determinate" value={this.state.percent} /> : null}
      </FormControl>
    )
  }
}

ProfileAvatar.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  url: string,
  name: string,
  user: shape({
    avatar_url: string,
    name: string,
  }).isRequired,
  onBlur: func,
}

ProfileAvatar.defaultProps = {
  url: '/upload',
  name: 'avatar_url',
  onBlur: () => {},
}

export default withStyles(styles)(ProfileAvatar)
