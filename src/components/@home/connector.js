import { connect } from 'react-redux'
import currentUser from 'src/redux/selectors/currentUser'
import { bindActionCreators } from 'redux'
import actions from 'src/redux/action'

const mapStateToProps = state => ({
  user: currentUser(state),
  rooms: Object.values(state.entities.rooms)
})

const mapDispatchToProps = dispatch => ({
  actions: {
    loadRooms: bindActionCreators(actions.entities.rooms.list, dispatch),
    createRoom: bindActionCreators(actions.entities.rooms.create, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
