import { connect } from 'react-redux'
import authUser from 'selectors/authUser'

const mapStateToProps = state => ({
  user: authUser(state),
})

const mapDispatchToProps = () => ({
  actions: {},
})

export default connect(mapStateToProps, mapDispatchToProps)
