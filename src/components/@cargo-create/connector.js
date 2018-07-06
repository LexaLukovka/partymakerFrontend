import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/createCargo.action'

const initMapStateToProps = state => state.addCargoFormReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    cargoForm: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
