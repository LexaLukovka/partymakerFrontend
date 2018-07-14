import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/createParty.action'
import * as load from '../../actions/partyCreateTags.action'

const initMapStateToProps = state => ({
  name: state.createParty,
  partyTags: state.partyCreateTags,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(actions, dispatch),
    partyTags: bindActionCreators(load, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
