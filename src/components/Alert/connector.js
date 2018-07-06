import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/alert.action'

const initMapStateToProps = state => state.alertReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    alert: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
