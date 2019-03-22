import { getUsers, removeUser, updateUser } from '../../redux/modules/user';
import { connect } from 'react-redux';
import { Admin } from '../../components/index';

const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user,
        users: state.user.users
    });
}
export default connect(mapStateToProps, { getUsers, removeUser, updateUser })(Admin);