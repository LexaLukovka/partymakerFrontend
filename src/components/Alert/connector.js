import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/alert/action'

const initMapStateToProps = store => store.alertReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    alert: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
