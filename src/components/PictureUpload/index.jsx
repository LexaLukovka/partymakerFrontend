/* eslint-disable function-paren-newline,react/prefer-stateless-function,no-return-assign */
import React from 'react'
import { func, object, string, array } from 'prop-types'
import { FormControl, FormHelperText, withStyles } from '@material-ui/core'
import PictureList from './PictureList'
import Http from 'services/Http'
import AddPicture from './AddPicture'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size4,
  },
  fileInput: {
    opacity: 0,
    position: 'absolute',
  },
  pictureList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

class PictureUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: props.pictures,
      loadingPicture: '',
      percent: 0,
    }

    this.handleClickInput = this.handleClickInput.bind(this)
  }

  add = (image) => {
    if (image.type.match(/image.*/)) {
      const reader = new FileReader()
      reader.onload = () => {
        this.setState({ loadingPicture: reader.result })
      }
      reader.readAsDataURL(image)
    }
  }

  upload = async (image) => {
    const formData = new FormData()
    formData.append('image', image)
    const response = await Http.post(this.props.url, formData, {
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        this.setState({ percent })
      },
    })

    const { pictures } = this.state
    pictures.push(response.url)
    this.setState({ pictures, percent: 0 })
  }

  handleAdd = async (e) => {
    const { onChange, name } = this.props
    const image = e.target.files[0]
    this.add(image)
    await this.upload(image)

    onChange(name, this.state.pictures)
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  handleDelete = (picture_url) => {
    const { onChange, name } = this.props
    const pictures = this.state.pictures.filter(picture => picture !== picture_url)
    this.setState({ pictures })

    onChange(name, pictures)
  }

  handleClickInput() {
    this.fileInput.click()
  }

  render() {
    const { classes, name, helperText } = this.props
    return (
      <FormControl className={classes.root}>
        <div className={classes.pictureList}>
          <PictureList pictures={this.state.pictures} onDelete={this.handleDelete} />
          <AddPicture
            loadingPicture={this.state.loadingPicture}
            percent={this.state.percent}
            onClick={this.handleClickInput}
          />
        </div>

        <input
          className={classes.fileInput}
          ref={input => this.fileInput = input}
          onChange={this.handleAdd}
          onBlur={this.handleBlur}
          name={name}
          accept="image/*"
          type="file"
        />

        {helperText && <FormHelperText id="name-error-text">{helperText}</FormHelperText>}
      </FormControl>
    )
  }
}

PictureUpload.propTypes = {
  url: string,
  classes: object.isRequired,
  pictures: array,
  name: string.isRequired,
  helperText: string,
  onChange: func,
  onBlur: func,
}
PictureUpload.defaultProps = {
  url: '/upload',
  pictures: [],
  helperText: '',
  onChange: () => {},
  onBlur: () => {},
}

export default withStyles(styles)(PictureUpload)
