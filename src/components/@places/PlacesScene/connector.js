import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import place from 'src/redux/places/place/action'
import places from 'src/redux/places/action'

const initMapStateToProps = store => ({
  place: store.placesReducer.current,
  places: store.placesReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    places: bindActionCreators(places, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
