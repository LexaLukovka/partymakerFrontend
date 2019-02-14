import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from 'src/redux/layout/action'

const initMapStateToProps = store => ({
  layout: store.layout,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
