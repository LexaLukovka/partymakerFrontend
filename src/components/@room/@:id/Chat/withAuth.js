import { connect } from 'react-redux'

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)
