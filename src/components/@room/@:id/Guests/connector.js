import { connect } from 'react-redux'

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)
