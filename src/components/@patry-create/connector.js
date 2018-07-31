import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as createParty from '../../redux/party/create/action'
import * as stepper from '../../redux/stepper/action'

const initMapStateToProps = store => ({
  party: store.party.createReducer,
  step: store.stepperReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(createParty, dispatch),
    stepper: bindActionCreators(stepper, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
