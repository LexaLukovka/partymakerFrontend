import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as createParty from 'src/redux/party/create/action'
import * as header from 'src/redux/header/action'
import * as place from 'src/redux/place/single/action'
import * as button from 'src/redux/group/buttonCreate/action'
import * as group from 'src/redux/group/create/action'
import * as types from 'src/redux/party/types/action'

const initMapStateToProps = store => ({
  group: store.group.createReducer,
  place: store.place.singleReducer.place,
  partyTypes: store.party.typesReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    party: bindActionCreators(createParty, dispatch),
    button: bindActionCreators(button, dispatch),
    group: bindActionCreators(group, dispatch),
    header: bindActionCreators(header, dispatch),
    partyTypes: bindActionCreators(types, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
