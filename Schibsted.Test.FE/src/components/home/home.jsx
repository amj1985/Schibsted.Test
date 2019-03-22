import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hello {user.email}!</h1>
                <p>You're logged in</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}
