import { connect } from 'react-redux'

const initMapStateToProps = (store) => ({
  canSelect: store.placesReducer.canSelect,
})

export default connect(initMapStateToProps)
