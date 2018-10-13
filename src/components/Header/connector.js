import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  header: store.headerReducer,
})

const initMapDispatchToProps = () => ({
  actions: {},
})

export default connect(initMapStateToProps, initMapDispatchToProps)
