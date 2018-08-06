import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/auth/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(actions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
