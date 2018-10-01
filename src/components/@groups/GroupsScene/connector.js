import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as groups from 'src/redux/group/list/action'
import * as group from 'src/redux/group/single/action'
import * as actionButton from 'src/redux/actionButton/action'

const initMapStateToProps = store => store.group.listReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    group: bindActionCreators(group, dispatch),
    groups: bindActionCreators(groups, dispatch),
    actionButton: bindActionCreators(actionButton, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
