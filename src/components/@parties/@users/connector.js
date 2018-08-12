import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as memberActions from 'src/redux/party/member/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => store.party.memberReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(memberActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
