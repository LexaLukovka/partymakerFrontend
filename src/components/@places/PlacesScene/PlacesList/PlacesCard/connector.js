import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  isChoose: store.place.buttonReducer.isChoose,
})

export default connect(initMapStateToProps)
