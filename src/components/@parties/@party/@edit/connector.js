import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as partyActions from 'src/redux/party/single/action'
import * as partiesActions from 'src/redux/party/list/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => store.party.singleReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(partyActions, dispatch),
    parties: bindActionCreators(partiesActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
