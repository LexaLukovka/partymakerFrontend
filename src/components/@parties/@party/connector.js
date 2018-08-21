import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as partyActions from 'src/redux/party/single/action'
import * as placeActions from '../../../redux/place/single/action'
import * as headerActions from 'src/redux/header/action'
import * as memberActions from 'src/redux/party/member/action'
import * as authActions from 'src/redux/auth/action'

const initMapStateToProps = store => ({
  ...store.party.singleReducer,
  ...store.place.singleReducer,
  isMember: store.party.memberReducer.isMember,
  memberLoading: store.party.memberReducer.loading,
  auth: store.authReducer,

})

const initMapDispatchToProps = dispatch => ({
  actions: {
    parties: bindActionCreators(partyActions, dispatch),
    place: bindActionCreators(placeActions, dispatch),
    members: bindActionCreators(memberActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    auth: bindActionCreators(authActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
