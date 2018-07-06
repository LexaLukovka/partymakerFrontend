/* eslint-disable function-paren-newline,react/prefer-stateless-function,no-return-assign */
import React from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/es/LinearProgress/LinearProgress'
import FormControl from '@material-ui/core/es/FormControl/FormControl'
import FormHelperText from '@material-ui/core/es/FormHelperText/FormHelperText'
import { withStyles } from '@material-ui/core/styles'
import PictureList from './PictureList'
import Http from '../../../../../../services/Http'
import AddPicture from './AddPicture'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: '5%',
    margin: 2,
  },

  fileInput: {
    opacity: 0,
    position: 'absolute',
  },
  pictureList: {
    marginTop: theme.spacing.size3,
    display: 'flex',
    flexWrap: 'wrap',
  },
})

class PictureUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      percent: 0,
      saved: props.value,
    }

    this.handleClickInput = this.handleClickInput.bind(this)
  }

  add = (image) => {
    if (image.type.match(/image.*/)) {
      const reader = new FileReader()
      reader.onload = () => {
        const { pictures } = this.state
        pictures.push(reader.result)
        this.setState({ pictures })
      }
      reader.readAsDataURL(image)
    }
  }

  upload = async (image) => {
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

    const { saved } = this.state
    saved.push(response.url)
    this.setState({ percent: 100, saved })

    this.timeout = setTimeout(() => this.setState({ percent: 0 }), 300)
  }

  handleChange = async (e) => {
    const image = e.target.files[0]
    await this.upload(image)
    this.add(image)
    this.props.onChange(this.props.name, this.state.saved)
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  handleClickInput() {
    this.fileInput.click()
  }

  render() {
    const { classes, name, helperText, ...props } = this.props
    return (
      <FormControl>
        <div className={classes.pictureList}>
          <PictureList pictures={this.state.pictures} />
          <AddPicture onClick={this.handleClickInput} />
        </div>
        <input
          {...props}
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
  url: PropTypes.string,
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  helperText: PropTypes.string,
}
PictureUpload.defaultProps = {
  url: '/upload',
  helperText: '',
}

export default withStyles(styles)(PictureUpload)
