import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as events from 'src/redux/events/action'

const initMapStateToProps = store => ({
  events: store.eventsReducer,
  canSelect: store.eventsReducer.canSelect,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    events: bindActionCreators(events, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
