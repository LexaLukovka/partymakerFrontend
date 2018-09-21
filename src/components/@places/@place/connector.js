import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as place from 'src/redux/place/single/action'
import * as placeVotes from 'src/redux/place/votes/action'
import * as parties from 'src/redux/party/list/action'
import * as header from 'src/redux/header/action'
import * as pictureModal from 'src/redux/pictureModal/action'

const initMapStateToProps = store => ({
  place: store.place.singleReducer,
  placeVotes: store.place.votesReducer,
  groups: store.group.listReducer,
  auth: store.authReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    placeVotes: bindActionCreators(placeVotes, dispatch),
    parties: bindActionCreators(parties, dispatch),
    pictureModal: bindActionCreators(pictureModal, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
