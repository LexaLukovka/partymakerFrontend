import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as place from 'src/redux/place/single/action'
import * as parties from 'src/redux/party/list/action'
import * as header from 'src/redux/header/action'

const initMapStateToProps = store => ({
  place: store.place.singleReducer,
  parties: store.party.listReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    place: bindActionCreators(place, dispatch),
    parties: bindActionCreators(parties, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
