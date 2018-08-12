import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as partyActions from 'src/redux/party/list/action'
import * as party from 'src/redux/party/single/action'

const initMapStateToProps = store => ({
  parties: store.party.listReducer,
  auth: store.authReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(party, dispatch),
    parties: bindActionCreators(partyActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
