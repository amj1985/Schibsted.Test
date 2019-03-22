import React from 'react';
import { Link } from 'react-router-dom';
import { updateUser } from '../../redux/modules/user';

export default class Admin extends React.Component {
    componentWillMount() {
        const { getUsers, user } = this.props;
        if(user.roles.includes('ADMIN'))
        return getUsers();
    }
    handleDelete(user) {
        const { removeUser } = this.props;
        return removeUser(user.id);
    }
    handleNew() {
        const { history } = this.props;
        history.push('/register');
    }
    handleEdit(user) {
        const { history } = this.props;
        history.push({
            pathname: '/register',
            state: { selectedUser: user }
        });
    }
    render() {
        const { users, user } = this.props;
        const isAdmin = user.roles.includes('ADMIN');
        const message = isAdmin
            ? 'You are authorized to see this page'
            : 'You are not authorized to see this page';

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>ADMIN</h1>
                <h2>{message}!</h2>
                {isAdmin &&
                    <div>
                        <button type="button" className="btn btn-warning" onClick={() => this.handleNew()}>ADD</button>
                        <ul className="list-group list-group-flush">
                            {users.map((user, index) => (
                                <li
                                    key={index}
                                    className="list-group-item">
                                    <b>{user.email}</b>
                                    <button type="button" className="btn btn-warning" onClick={() => this.handleEdit(user)}>edit</button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(user)}>delete</button>
                                </li>))}
                        </ul>
                    </div>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div >
        );
    }
}
{/* className="col-md-6 col-md-offset-2 */ }