import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/app/auth/action'
import layout from 'src/redux/app/ui/layout/action'
import authUser from 'src/redux/selectors/authUser'

const mapStateToProps = store => ({
  loading: store.auth.loading,
  user: authUser(store),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    activate: bindActionCreators(auth.activate, dispatch),
    layout: bindActionCreators(layout, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
