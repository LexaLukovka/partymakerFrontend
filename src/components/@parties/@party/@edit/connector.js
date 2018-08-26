import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as partyActions from 'src/redux/party/single/action'
import * as partiesActions from 'src/redux/party/list/action'
import * as deleteActions from 'src/redux/party/delete/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => store.party.singleReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    header: bindActionCreators(headerActions, dispatch),
    party: bindActionCreators(partyActions, dispatch),
    parties: bindActionCreators(partiesActions, dispatch),
    deleteParty: bindActionCreators(deleteActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
