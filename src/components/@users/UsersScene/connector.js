import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'src/redux/auth/action'
import * as headerActions from 'src/redux/header/action'
import * as userActions from 'src/redux/user/action'
import * as groupsActions from 'src/redux/group/list/action'
import * as actionButton from 'src/redux/actionButton/action'
import * as settingsActions from 'src/redux/auth/action'
import * as pictureModal from 'src/redux/pictureModal/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  user: store.userReducer,
  group: store.group.listReducer,
  header: store.headerReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
    user: bindActionCreators(userActions, dispatch),
    group: bindActionCreators(groupsActions, dispatch),
    settings: bindActionCreators(settingsActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
    pictureModal: bindActionCreators(pictureModal, dispatch),
    actionButton: bindActionCreators(actionButton, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
