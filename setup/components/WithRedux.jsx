import React from 'react'
import { node } from 'prop-types'
import { Provider } from 'react-redux'
import store, { persistor } from 'src/redux/store'
import { hot } from 'react-hot-loader/root'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from 'src/components/Loading'
import 'assets/index.css'

const WithRedux = ({ children }) =>
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>

WithRedux.propTypes = {
  children: node.isRequired,
}
export default hot(WithRedux)
