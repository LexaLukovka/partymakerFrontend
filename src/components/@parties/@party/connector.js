import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as partyActions from '../../../redux/party/single/action'
import * as headerActions from '../../../redux/header/action'

const initMapStateToProps = store => store.party.singleReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    parties: bindActionCreators(partyActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
