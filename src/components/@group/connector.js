import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as place from 'src/redux/place/single/action'

const initMapStateToProps = () => ({})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
