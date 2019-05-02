import { connect } from 'react-redux'
import currentRoom from 'src/redux/rooms/selectors/currentRoom'
import actions from 'src/redux/action'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  room: currentRoom(state),
})

const mapDispatchToProps = dispatch => {
  return ({
    actions: {
      room: {
        load: bindActionCreators(actions.rooms.find, dispatch),
        update: bindActionCreators(actions.rooms.update, dispatch),
        leave: bindActionCreators(actions.rooms.leave, dispatch),

        guests: {
          loadMany: bindActionCreators(actions.rooms.guests.list, dispatch),
          kick: bindActionCreators(actions.rooms.guests.kick, dispatch),
        },
        messages: {
          loadMany: bindActionCreators(actions.rooms.messages.list, dispatch),
          create: bindActionCreators(actions.rooms.messages.create, dispatch),
          set: bindActionCreators(actions.messages.set, dispatch),
        },
        invite: {
          load: bindActionCreators(actions.rooms.invite.load, dispatch),
          create: bindActionCreators(actions.rooms.invite.create, dispatch),
          update: bindActionCreators(actions.rooms.invite.update, dispatch),
        },
      },

      place: {
        load: bindActionCreators(actions.places.load, dispatch),
        create: bindActionCreators(actions.places.create, dispatch),
        update: bindActionCreators(actions.places.update, dispatch),
      },
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
