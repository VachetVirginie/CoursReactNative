import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import History from '../components/History';



const mapStateToProps = state => ({
    history: state.increment.history,
})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(History)