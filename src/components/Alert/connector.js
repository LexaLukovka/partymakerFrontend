import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from 'src/redux/app/ui/alert/action'

const mapStateToProps = store => store.ui.alert

const mapDispatchToProps = dispatch => ({
  actions: {
    alert: bindActionCreators(actions, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
