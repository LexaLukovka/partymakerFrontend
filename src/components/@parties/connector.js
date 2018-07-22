import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/auth/action'

const initMapStateToProps = store => store.party.listReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
