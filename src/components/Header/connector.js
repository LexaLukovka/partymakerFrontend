import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import authUser from 'selectors/authUser'
import auth from 'src/redux/app/auth/action'

const mapStateToProps = state => ({
  user: authUser(state),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
