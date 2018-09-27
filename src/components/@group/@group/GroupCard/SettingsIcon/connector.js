import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as deleteActions from 'src/redux/group/delete/action'

const initMapStateToProps = store => ({
  ...store.group.deleteReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    delete: bindActionCreators(deleteActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
