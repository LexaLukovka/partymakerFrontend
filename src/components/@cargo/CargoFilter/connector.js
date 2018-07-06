import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cargoActions from '../../../actions/cargo.action'
import * as filterActions from '../../../actions/filter.action'

const initMapStateToProps = state => state.filterReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    cargo: bindActionCreators(cargoActions, dispatch),
    filter: bindActionCreators(filterActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
