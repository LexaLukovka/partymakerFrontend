import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/app/ui/layout/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
