import React, { Component } from 'react'
import { node, object, array } from 'prop-types'

const PreloadContext = React.createContext([])

export const PreloadProvider = PreloadContext.Provider
export const PreloadConsumer = PreloadContext.Consumer

class PreloadManager extends Component {

  render() {
    const { children, promises, request, store } = this.props

    return (
      <PreloadProvider
        value={{ request, promises, store }}
      >
        {children}
      </PreloadProvider>
    )
  }
}

PreloadManager.propTypes = {
  promises: array.isRequired,
  store: object.isRequired,
  request: object.isRequired,
  children: node.isRequired,
}

export default PreloadManager
