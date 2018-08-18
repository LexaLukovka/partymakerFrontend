import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/alert/action'

const initMapStateToProps = store => ({
  actionButton: store.actionButtonReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    actionButton: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
