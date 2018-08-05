/* eslint-disable spaced-comment */
import React from 'react'
import { object } from 'prop-types'
import Banner from './Banner'
import connector from './connector'

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.layout.background('http://localhost:3333/images/summer.jpg')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    return (
      <div>
        <Banner />
      </div>
    )
  }
}

IndexScene.propTypes = {
  actions: object.isRequired,
}

export default connector(IndexScene)
