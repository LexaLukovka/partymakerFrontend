import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as header from 'src/redux/header/action'
import * as group from 'src/redux/group/create/action'

import * as events from 'src/redux/events/action'
import * as event from 'src/redux/events/event/action'

import * as places from 'src/redux/places/action'
import * as place from 'src/redux/places/place/action'

const initMapStateToProps = store => ({
  group: store.group.createReducer,
  place: store.placesReducer.current,
  event: store.eventsReducer.current,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    header: bindActionCreators(header, dispatch),
    group: bindActionCreators(group, dispatch),
    events: bindActionCreators(events, dispatch),
    event: bindActionCreators(event, dispatch),
    places: bindActionCreators(places, dispatch),
    place: bindActionCreators(place, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
