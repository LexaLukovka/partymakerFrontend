import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/auth/action'
import * as headerActions from 'src/redux/header/action'
import * as settingsActions from 'src/redux/settings/action'

const initMapStateToProps = store => ({
  user: store.authReducer.user,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(actions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    settings: bindActionCreators(settingsActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
