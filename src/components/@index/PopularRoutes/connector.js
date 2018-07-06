import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../actions/popularRoutes.action'

const initMapStateToProps = store => store.popularRoutes

const initMapDispatchToProps = dispatch => ({
  actions: {
    popularRoutes: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
