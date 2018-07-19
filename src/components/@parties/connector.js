import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/auth.action'

const initMapStateToProps = store => store.partiesReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
