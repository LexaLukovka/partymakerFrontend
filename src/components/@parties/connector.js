import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authAction from '../../redux/auth/action'
import * as partyActions from '../../redux/party/list/action'
import * as party from '../../redux/party/single/action'
import * as like from '../../redux/party/like/action'

const initMapStateToProps = store => store.party.listReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authAction, dispatch),
    party: bindActionCreators(party, dispatch),
    parties: bindActionCreators(partyActions, dispatch),
    like: bindActionCreators(like, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
