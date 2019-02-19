import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from 'app/ui/layout/action'

const initMapStateToProps = store => ({
  layout: store.ui.layout,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
