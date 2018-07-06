import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../../actions/createCargo.action'
import * as alertActions from '../../../../actions/alert.action'

const initMapStateToProps = state => state.addCargoFormReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    cargoForm: bindActionCreators(actions, dispatch),
    alert: bindActionCreators(alertActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
