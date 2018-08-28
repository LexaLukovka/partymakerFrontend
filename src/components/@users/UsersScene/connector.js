import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'src/redux/auth/action'
import * as headerActions from 'src/redux/header/action'
import * as userActions from 'src/redux/user/action'
import * as partiesActions from 'src/redux/party/list/action'
import * as actionButton from 'src/redux/actionButton/action'
import * as settingsActions from 'src/redux/auth/action'
import * as pictureModal from 'src/redux/pictureModal/action'

const initMapStateToProps = store => ({
  user: store.userReducer,
  header: store.headerReducer,
  auth: store.authReducer,
  parties: store.party.listReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    pictureModal: bindActionCreators(pictureModal, dispatch),
    user: bindActionCreators(userActions, dispatch),
    parties: bindActionCreators(partiesActions, dispatch),
    actionButton: bindActionCreators(actionButton, dispatch),
    settings: bindActionCreators(settingsActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
