import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'src/redux/auth/action'
import * as headerActions from 'src/redux/header/action'
import * as userActions from 'src/redux/user/action'

const initMapStateToProps = store => ({
  ...store.userReducer,
  header: store.headerReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    user: bindActionCreators(userActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
