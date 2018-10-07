import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as groupActions from 'src/redux/group/single/action'
import * as headerActions from 'src/redux/header/action'
import * as memberActions from 'src/redux/group/member/action'
import * as authActions from 'src/redux/auth/action'

const initMapStateToProps = store => ({
  ...store.group.singleReducer,
  auth: store.authReducer,
  member: store.group.memberReducer,
  memberLoading: store.group.memberReducer.loading,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groups: bindActionCreators(groupActions, dispatch),
    members: bindActionCreators(memberActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    auth: bindActionCreators(authActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
