import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as createParty from 'src/redux/party/create/action'
import * as header from 'src/redux/header/action'
import * as place from 'src/redux/place/single/action'
import * as types from 'src/redux/party/types/action'

const initMapStateToProps = store => ({
  party: store.party.createReducer,
  place: store.place.singleReducer.place,
  partyTypes: store.party.typesReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    party: bindActionCreators(createParty, dispatch),
    header: bindActionCreators(header, dispatch),
    partyTypes: bindActionCreators(types, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
