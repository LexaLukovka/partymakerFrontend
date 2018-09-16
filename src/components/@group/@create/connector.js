import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as header from 'src/redux/header/action'
import * as place from 'src/redux/place/single/action'
import * as button from 'src/redux/group/buttonCreate/action'
import * as group from 'src/redux/group/create/action'

const initMapStateToProps = store => ({
  group: store.group.createReducer,
  place: store.place.singleReducer.place,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    button: bindActionCreators(button, dispatch),
    group: bindActionCreators(group, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
