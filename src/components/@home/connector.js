import { connect } from 'react-redux'
import currentUser from 'src/redux/selectors/currentUser'

const mapStateToProps = state => ({
  user: currentUser(state),
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)
