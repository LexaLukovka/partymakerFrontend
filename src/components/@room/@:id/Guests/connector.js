import { connect } from 'react-redux'
import isMeAdmin from 'src/redux/rooms/selectors/isMeAdmin'

const mapStateToProps = state => ({
  isMeAdmin: isMeAdmin(state)
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)
