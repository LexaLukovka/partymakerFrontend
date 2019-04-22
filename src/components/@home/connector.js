import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import actions from 'src/redux/action'

const mapStateToProps = state => ({
  user: currentUser(state),
  rooms: Object.values(state.rooms.entities)
})

const mapDispatchToProps = dispatch => ({
  actions: {
    loadRooms: bindActionCreators(actions.rooms.list, dispatch),
    createRoom: bindActionCreators(actions.rooms.create, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
