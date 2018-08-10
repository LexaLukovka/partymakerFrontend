import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as placeActions from 'src/redux/place/single/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => store.place.singleReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(placeActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
