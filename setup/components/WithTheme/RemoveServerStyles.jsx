import React from 'react'
import { node } from 'prop-types'

class RemoveServerStyles extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

RemoveServerStyles.propTypes = {
  children: node.isRequired,
}

export default RemoveServerStyles
