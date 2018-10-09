import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'src/redux/auth/action'
import * as headerActions from 'src/redux/header/action'
import * as userActions from 'src/redux/user/action'

const initMapStateToProps = store => ({
  ...store.authReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(actions, dispatch),
    user: bindActionCreators(userActions, dispatch),
    settings: bindActionCreators(actions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
