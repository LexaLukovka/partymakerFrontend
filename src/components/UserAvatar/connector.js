import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pictureModal from 'src/redux/pictureModal/action'

const initMapStateToProps = () => ({})

const initMapDispatchToProps = dispatch => ({
  actions: {
    pictureModal: bindActionCreators(pictureModal, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
