import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as placeActions from 'src/redux/place/single/action'
import * as partiesActions from 'src/redux/party/list/action'

import * as headerActions from 'src/redux/header/action'

const initMapStateToProps = store => ({
  place: store.place.singleReducer,
  parties: store.party.listReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(placeActions, dispatch),
    parties: bindActionCreators(partiesActions, dispatch),
    header: bindActionCreators(headerActions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
