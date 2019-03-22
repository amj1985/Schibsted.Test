import { connect } from 'react-redux';
import { Register } from '../../components/index';
import { addUser, updateUser } from '../../redux/modules/user';
const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user
    });
}
export default connect(mapStateToProps, { addUser, updateUser })(Register);