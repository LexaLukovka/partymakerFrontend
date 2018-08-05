import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'src/redux/layout/action'

const initMapStateToProps = store => ({
  layout: store.layoutReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
