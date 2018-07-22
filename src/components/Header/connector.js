import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as auth from '../../redux/auth/action'
import * as drawer from '../../redux/drawer/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
    drawer: bindActionCreators(drawer, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
