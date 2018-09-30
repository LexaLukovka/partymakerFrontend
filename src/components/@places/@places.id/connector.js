import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as place from 'src/redux/places/place/action'
import * as header from 'src/redux/header/action'
import * as pictureModal from 'src/redux/pictureModal/action'

const initMapStateToProps = store => ({
  place: store.placesReducer.current,
  auth: store.authReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    pictureModal: bindActionCreators(pictureModal, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
