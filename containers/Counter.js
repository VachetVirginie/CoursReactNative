import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter';



const mapStateToProps = state => ({
    counter: state.counter,
    inputValue: state.increment.inputValue,
    error: state.increment.error,
//    history: state.increment.history,
})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)