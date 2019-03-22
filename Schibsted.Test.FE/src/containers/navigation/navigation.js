import { connect } from 'react-redux';
import { Navigation } from '../../components/index';

const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user,
    });
}
export default connect(mapStateToProps)(Navigation);