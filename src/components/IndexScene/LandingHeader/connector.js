import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import currentUser from 'src/redux/selectors/currentUser'
import auth from 'src/redux/auth/action'

const mapStateToProps = state => ({
  user: currentUser(state),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
