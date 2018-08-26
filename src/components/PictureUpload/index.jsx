/* eslint-disable function-paren-newline,react/prefer-stateless-function,no-return-assign */
import React from 'react'
import { func, object, string, array } from 'prop-types'
import { LinearProgress, FormControl, FormHelperText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import uniq from 'lodash/uniq'
import flatten from 'lodash/flattenDeep'
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
      percent: 0,
    }

    this.handleClickInput = this.handleClickInput.bind(this)
  }

  add = (image) => {
    if (image.type.match(/image.*/)) {
      const reader = new FileReader()
      reader.onload = () => {
        const { pictures } = this.state
        pictures.push(reader.result)
        this.setState({ pictures: uniq(pictures) })
      }
      reader.readAsDataURL(image)
    }
  }

  upload = async (image) => {
    clearTimeout(this.timeout)
    this.setState({ percent: 0 })

    const formData = new FormData()
    formData.append('image', image, {
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        this.setState({ percent })
      },
    })

    const response = await Http.post(this.props.url, formData)

    this.setState({ percent: 100 })

    this.timeout = setTimeout(() => this.setState({ percent: 0 }), 300)
  }

  handleChange = async (e) => {
    const image = e.target.files[0]
    await this.upload(image)
    this.add(image)

    const { onChange, name, pictures } = this.props

    onChange(name, pictures)
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  handleDelete = (picture_url) => {
    this.setState({ pictures: this.state.pictures.filter(picture => picture !== picture_url) })
  }

  handleClickInput() {
    this.fileInput.click()
  }

  render() {
    const { classes, name, helperText } = this.props
    debugger
    return (
      <FormControl className={classes.root}>
        <div className={classes.pictureList}>
          <PictureList pictures={this.state.pictures} onDelete={this.handleDelete} />
          <AddPicture onClick={this.handleClickInput} />
        </div>

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
        {helperText ? <FormHelperText id="name-error-text">{helperText}</FormHelperText> : null}
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
