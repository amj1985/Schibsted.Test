import { connect } from 'react-redux';
import { App } from '../../components/index';


const mapStateToProps = function (state) {
    const { alert } = state;
    return {
        alert
    };
}
export default connect(mapStateToProps)(App);
