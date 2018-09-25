import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as header from 'src/redux/header/action'
import * as place from 'src/redux/place/single/action'
import * as buttonPlace from 'src/redux/place/buttonCreate/action'
import * as buttonEvent from 'src/redux/event/buttonCreate/action'
import * as group from 'src/redux/group/create/action'

const initMapStateToProps = store => ({
  group: store.group.createReducer,
  place: store.place.singleReducer.place,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    buttonPlace: bindActionCreators(buttonPlace, dispatch),
    buttonEvent: bindActionCreators(buttonEvent, dispatch),
    group: bindActionCreators(group, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
