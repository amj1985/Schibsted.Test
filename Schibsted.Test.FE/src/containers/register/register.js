import { connect } from 'react-redux';
import { Register } from '../../components/index';

const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user
    });
}
export default connect(mapStateToProps)(Register);