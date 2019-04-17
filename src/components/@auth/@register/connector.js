import { bindActionCreators } from 'redux/index'
import { connect } from 'react-redux'
import auth from 'src/redux/auth/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    register: bindActionCreators(auth.register, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
