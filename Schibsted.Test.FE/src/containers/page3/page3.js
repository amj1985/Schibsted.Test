import { connect } from 'react-redux';
import { Page3 } from '../../components/index';

const mapStateToProps = function (state) {
    return ({
        user: state.authentication.user,
    });
}
export default connect(mapStateToProps)(Page3);