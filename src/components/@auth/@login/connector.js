import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/app/auth/action'
import layout from 'src/redux/app/ui/layout/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    login: bindActionCreators(auth.login, dispatch),
    layout: bindActionCreators(layout, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
