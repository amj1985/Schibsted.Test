import { connect } from 'react-redux';
import { Page1 } from '../../components/index';

const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user,
    });
}
export default connect(mapStateToProps)(Page1);