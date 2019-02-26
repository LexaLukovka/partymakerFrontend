import React from 'react'

export default (Component) =>
  class extends React.Component {
    render() {
      const isServer = typeof window === 'undefined'

      if (!isServer) {
        return <Component {...this.props} />
      }

      const PreloadConsumer = require('setup/components/PreloadManager').PreloadConsumer

      return (
        <PreloadConsumer>
          {(context) => {
            context.promises.push(Component.getInitialData({
              request: context.request,
              store: context.store,
              props: this.props
            }))

            return <Component {...this.props} />
          }}
        </PreloadConsumer>
      )
    }
  }
