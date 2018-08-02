import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as createParty from 'src/redux/party/create/action'

const initMapStateToProps = store => ({
  party: store.party.createReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(createParty, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
