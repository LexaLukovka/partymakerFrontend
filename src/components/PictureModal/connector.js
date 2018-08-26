import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'src/redux/pictureModal/action'

const initMapStateToProps = store => store.pictureModalReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    pictureModal: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
