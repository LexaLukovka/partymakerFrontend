import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authAction from '../../redux/auth/action'
import * as partyActions from '../../redux/party/list/action'

const initMapStateToProps = store => store.party.listReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authAction, dispatch),
    parties: bindActionCreators(partyActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
