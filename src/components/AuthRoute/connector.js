import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as auth from 'src/redux/auth/action'
import * as layout from 'src/redux/layout/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  layout: store.layoutReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
    layout: bindActionCreators(layout, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
