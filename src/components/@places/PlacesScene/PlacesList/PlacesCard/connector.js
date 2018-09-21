import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as group from 'src/redux/group/buttonCreate/action'

const initMapStateToProps = store => ({
  isChoose: store.group.buttonReducer.isChoose,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    group: bindActionCreators(group, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
