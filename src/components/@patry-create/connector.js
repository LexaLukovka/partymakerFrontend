import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/createParty.action'
import * as load from '../../actions/partyCreateTags.action'
import * as stepper from '../../actions/stepperNavigation.action'

const initMapStateToProps = state => ({
  party: state.createParty,
  partyTags: state.partyCreateTags,
  step: state.stepperNavigation,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(actions, dispatch),
    partyTags: bindActionCreators(load, dispatch),
    stepper: bindActionCreators(stepper, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
