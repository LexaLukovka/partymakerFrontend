import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as events from 'src/redux/events/event/action'
import * as headerActions from 'src/redux/header/action'
import * as pictureModal from 'src/redux/pictureModal/action'

const initMapStateToProps = store => ({
  event: store.eventsReducer.current,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    event: bindActionCreators(events, dispatch),
    pictureModal: bindActionCreators(pictureModal, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
