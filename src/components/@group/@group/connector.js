import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as groupActions from 'src/redux/group/single/action'
import * as placeActions from 'src/redux/place/single/action'
import * as headerActions from 'src/redux/header/action'
import * as memberActions from 'src/redux/party/member/action'
import * as authActions from 'src/redux/auth/action'

const initMapStateToProps = store => ({
  ...store.group.singleReducer,
  ...store.place.singleReducer,
  isMember: store.party.memberReducer.isMember,
  memberLoading: store.party.memberReducer.loading,
  auth: store.authReducer,

})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groups: bindActionCreators(groupActions, dispatch),
    place: bindActionCreators(placeActions, dispatch),
    members: bindActionCreators(memberActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    auth: bindActionCreators(authActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
