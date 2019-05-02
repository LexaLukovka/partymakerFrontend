import React, { Component } from 'react'
import { object, string, func, shape } from 'prop-types'
import { withStyles, IconButton, CircularProgress } from '@material-ui/core'
import AttachFileIcon from 'mdi-react/AttachFileIcon'
import connector from './connector'

const styles = {
  root: {
    position: 'relative'
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  loading: {
    position: 'absolute',
    top: -6,
    left: 6
  }
}

class AssetField extends Component {

  state = {
    isLoading: false
  }

  upload = async (e) => {
    const { actions, name, onChange } = this.props
    this.setState({ isLoading: true })
    const response = await actions.asset.create(e.target.files[0])
    this.setState({ isLoading: false })

    onChange(name, response.value)
  }

  render() {
    const { classes } = this.props
    const { isLoading } = this.state

    return (
      <>
        <input
          className={classes.input}
          id="upload-asset-input"
          type="file"
          onChange={this.upload}
        />
        <label className={classes.root} htmlFor="upload-asset-input">
          <IconButton disabled={isLoading} component="span">
            <AttachFileIcon />
          </IconButton>
          {isLoading && <CircularProgress size={36} className={classes.loading} />}
        </label>
      </>
    )
  }
}

AssetField.propTypes = {
  classes: object.isRequired,
  actions: shape({
    asset: shape({
      create: func.isRequired,
    })
  }),
  name: string.isRequired,
  onChange: func.isRequired,
}

export default withStyles(styles)(connector(AssetField))
