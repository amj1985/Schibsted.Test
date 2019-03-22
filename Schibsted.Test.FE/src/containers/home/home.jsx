import { connect } from 'react-redux';
import { Home } from '../../components/index';
import { getUsers } from '../../redux/modules/user';

const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user,
        users: state.users
    });
}
export default connect(mapStateToProps, { getUsers })(Home);