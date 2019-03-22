import React from 'react';
import { Link } from 'react-router-dom';

export default class Page1 extends React.Component {
    render() {
        const { user } = this.props;
        const message = user.roles.includes('PAGE_1') || user.roles.includes('ADMIN')
            ? 'You are authorized to see this page'
            : 'You are not authorized to see this page';
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>PAGE_1</h1>
                <h2>{message}!</h2>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}
