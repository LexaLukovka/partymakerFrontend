import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from 'app/../../redux/ui/layout/action'

const mapStateToProps = store => ({
  layout: store.ui.layout,
})

const mapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(actions, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
