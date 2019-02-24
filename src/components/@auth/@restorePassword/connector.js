import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/app/ui/layout/action'
import auth from 'src/redux/app/auth/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    restorePassword: bindActionCreators(auth.restorePassword, dispatch),
    layout: bindActionCreators(layout, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
