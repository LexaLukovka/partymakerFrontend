import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as buttonPlace from 'src/redux/place/buttonCreate/action'

const initMapStateToProps = store => ({
  isChoose: store.place.buttonReducer.isChoose,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    buttonPlace: bindActionCreators(buttonPlace, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
