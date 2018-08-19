import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as parties from 'src/redux/party/list/action'
import * as party from 'src/redux/party/single/action'
import * as actionButton from 'src/redux/actionButton/action'

const initMapStateToProps = store => store.party.listReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(party, dispatch),
    parties: bindActionCreators(parties, dispatch),
    actionButton: bindActionCreators(actionButton, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
