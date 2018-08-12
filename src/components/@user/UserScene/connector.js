import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'src/redux/auth/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  header: store.headerReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
