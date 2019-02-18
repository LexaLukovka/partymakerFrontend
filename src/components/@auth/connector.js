import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/app/ui/layout/action'
import auth from 'src/redux/app/auth/action'

const initMapStateToProps = () => ({})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
    layout: bindActionCreators(layout, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
