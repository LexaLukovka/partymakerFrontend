import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as events from 'src/redux/event/single/action'
import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => ({
  ...store.event.singleReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    event: bindActionCreators(events, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
