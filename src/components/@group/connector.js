import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as createGroup from 'src/redux/group/create/action'
import * as header from 'src/redux/header/action'
import * as place from 'src/redux/place/single/action'
import * as types from 'src/redux/party/types/action'

const initMapStateToProps = store => ({
  party: store.party.createReducer,
  place: store.place.singleReducer.place,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    group: bindActionCreators(createGroup, dispatch),
    header: bindActionCreators(header, dispatch),
    partyTypes: bindActionCreators(types, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
