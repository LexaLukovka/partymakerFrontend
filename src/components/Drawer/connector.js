import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/drawer/action'

const initMapStateToProps = store => store.drawerReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    drawer: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
