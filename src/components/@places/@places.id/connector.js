import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import places from 'src/redux/places/action'
import place from 'src/redux/places/place/action'
import header from 'src/redux/header/action'
import modal from 'src/redux/modal/action'

const initMapStateToProps = store => ({
  places: store.placesReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    places: bindActionCreators(places, dispatch),
    place: bindActionCreators(place, dispatch),
    modal: bindActionCreators(modal, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
