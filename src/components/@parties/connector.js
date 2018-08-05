import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as partyActions from 'src/redux/party/list/action'
import * as party from 'src/redux/party/single/action'
import * as like from 'src/redux/party/like/action'

const initMapStateToProps = store => store.party.listReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(party, dispatch),
    parties: bindActionCreators(partyActions, dispatch),
    like: bindActionCreators(like, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
