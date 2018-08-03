import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as createParty from 'src/redux/party/create/action'
import * as headerActions from '../../redux/header/action'

const initMapStateToProps = store => ({
  party: store.party.createReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    party: bindActionCreators(createParty, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
