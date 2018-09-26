import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as placeActions from 'src/redux/place/single/action'
import * as placesActions from 'src/redux/place/list/action'
import * as buttonPlace from 'src/redux/place/buttonCreate/action'

const initMapStateToProps = store => ({
  place: store.place.singleReducer,
  places: store.place.listReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(placeActions, dispatch),
    places: bindActionCreators(placesActions, dispatch),
    buttonPlace: bindActionCreators(buttonPlace, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
