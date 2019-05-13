import { connect } from 'react-redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import { bindActionCreators } from 'redux'
import actions from 'src/redux/action'

const mapStateToProps = state => ({
  user: currentUser(state),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: {
      user: {
        update: bindActionCreators(actions.auth.user.update, dispatch)
      },
      password: {
        update: bindActionCreators(actions.auth.password.update, dispatch)
      }
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
