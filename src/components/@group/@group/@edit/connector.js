import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as groupActions from 'src/redux/group/single/action'
import * as groupsActions from 'src/redux/group/list/action'
import * as deleteActions from 'src/redux/group/delete/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => store.group.singleReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    header: bindActionCreators(headerActions, dispatch),
    group: bindActionCreators(groupActions, dispatch),
    groups: bindActionCreators(groupsActions, dispatch),
    delete: bindActionCreators(deleteActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
