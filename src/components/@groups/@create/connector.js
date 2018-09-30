import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as header from 'src/redux/header/action'
import * as group from 'src/redux/group/create/action'
import * as place from 'src/redux/place/single/action'
import * as event from 'src/redux/event/single/action'
import * as buttonPlace from 'src/redux/place/buttonCreate/action'
import * as buttonEvent from 'src/redux/event/buttonCreate/action'

const initMapStateToProps = store => ({
  group: store.group.createReducer,
  place: store.place.singleReducer.place,
  event: store.event.singleReducer.event,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    header: bindActionCreators(header, dispatch),
    group: bindActionCreators(group, dispatch),
    place: bindActionCreators(place, dispatch),
    event: bindActionCreators(event, dispatch),
    buttonPlace: bindActionCreators(buttonPlace, dispatch),
    buttonEvent: bindActionCreators(buttonEvent, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
