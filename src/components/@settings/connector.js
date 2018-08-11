import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'src/redux/auth/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => ({
  user: store.authReducer.user,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(actions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    settings: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
