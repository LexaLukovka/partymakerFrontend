import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as partyActions from '../../redux/party/single/action'

const initMapStateToProps = store => store.party.singleReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    parties: bindActionCreators(partyActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
