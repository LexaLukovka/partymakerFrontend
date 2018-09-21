import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as memberActions from 'src/redux/group/member/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => store.group.memberReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(memberActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
