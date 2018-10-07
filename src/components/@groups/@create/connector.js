import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as header from 'src/redux/header/action'
import * as group from 'src/redux/group/create/action'
import * as event from 'src/redux/event/single/action'
import * as buttonEvent from 'src/redux/event/buttonCreate/action'
import * as places from 'src/redux/places/action'

const initMapStateToProps = store => ({
  group: store.group.createReducer,
  place: store.placesReducer.current,
  event: store.event.singleReducer.event,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    header: bindActionCreators(header, dispatch),
    group: bindActionCreators(group, dispatch),
    event: bindActionCreators(event, dispatch),
    buttonEvent: bindActionCreators(buttonEvent, dispatch),
    places: bindActionCreators(places, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
