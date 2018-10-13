import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as placeActions from 'src/redux/places/place/action'
import * as placesActions from 'src/redux/places/action'

const initMapStateToProps = store => ({
  place: store.placesReducer.current,
  places: store.placesReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(placeActions, dispatch),
    places: bindActionCreators(placesActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
