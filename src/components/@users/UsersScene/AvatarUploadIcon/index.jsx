import React, { Component } from 'react'
import { func, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from 'mdi-react/AddIcon'
import classNames from 'classnames'
import Http from 'services/Http'

const styles = theme => ({
  fileInput: {
    opacity: 0,
    position: 'absolute',
  },
  add: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    [theme.breakpoints.up('sm')]: {
      width: 30,
      height: 30,
    },
  },
})

class AvatarUploadIcon extends Component {
  upload = async e => {
    const formData = new FormData()
    formData.append('image', e.target.files[0])
    const response = await Http.post('/upload', formData)

    this.props.onChange(response.url)
  }

  handleClick = () => {
    this.fileInput.click()
  }

  render() {
    const { classes, className } = this.props
    return (
      <div className={classNames(classes.root, className)}>
        <AddIcon className={classes.add} onClick={this.handleClick} />
        <input
          className={classes.fileInput}
          ref={input => { this.fileInput = input }}
          onChange={this.upload}
          onBlur={this.handleBlur}
          name="avatar_url"
          accept="image/*"
          type="file"
        />
      </div>
    )
  }
}

AvatarUploadIcon.propTypes = {
  classes: object.isRequired,
  onChange: func.isRequired,
  className: string.isRequired,
}

export default withStyles(styles)(AvatarUploadIcon)
