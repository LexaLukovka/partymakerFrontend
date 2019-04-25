import { connect } from 'react-redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import currentRoom from 'src/redux/rooms/selectors/currentRoom'
import { bindActionCreators } from 'redux'
import actions from 'src/redux/action'

const mapStateToProps = state => ({
  user: currentUser(state),
  room: currentRoom(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    loadRoom: bindActionCreators(actions.rooms.find, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
