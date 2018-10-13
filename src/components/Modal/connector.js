import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import modal from 'src/redux/modal/action'

const initMapStateToProps = store => store.modalReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    modal: bindActionCreators(modal, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
