import { bindActionCreators } from 'redux/index'
import { connect } from 'react-redux'
import auth from 'app/auth/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    forgotPassword: bindActionCreators(auth.forgotPassword, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
