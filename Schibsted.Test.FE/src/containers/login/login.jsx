import { connect } from 'react-redux';
import { Login } from '../../components/index';
import {
    login,
    logout
} from '../../redux/modules/authentication';
const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user,
    });
}
export default connect(mapStateToProps, { login, logout })(Login);