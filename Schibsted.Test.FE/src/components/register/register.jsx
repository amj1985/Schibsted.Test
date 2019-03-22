import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { CheckboxGroup } from '../../components';
class Register extends React.Component {
    componentWillReceiveProps() {
        const selectedUser = this.props.history.location.state !== undefined ? this.props.history.location.state.selectedUser : undefined;
        if(selectedUser) this.props.initialize({email : selectedUser.email });
    }
    onSubmit(data) {
        debugger;
    }
    render() {
        const options = [
            { label: 'ADMIN', value: '0' },
            { label: 'PAGE_1', value: '1' },
            { label: 'PAGE_2', value: '2' },
            { label: 'PAGE_3', value: '3' }
        ];
        const { handleSubmit } = this.props;
        const selectedUser = this.props.history.location.state !== undefined ? this.props.history.location.state.selectedUser : undefined; 
        return (
            <div className="col-md-6 col-md-offset-2">
                <h2>Register</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className={'form-group'}>
                        <label htmlFor="email">Email</label>
                        <Field
                            className="form-control"
                            name="email"
                            component="input"
                            type="text"
                        />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Password</label>
                        <Field
                            className="form-control"
                            name="password"
                            component="input"
                            type="password"
                        />
                    </div>
                    <CheckboxGroup name="roles" options={options} />
                    <div className={"form-group"}>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <Link to="/login" className="btn btn-link">Logout</Link>
                    </div>
                </form>
            </div >
        );
    }
}

Register = reduxForm({
    form: 'Register',
    fields: ['email', 'password', 'admin', 'page1', 'page2', 'page3'],
    enableReinitialize: true,
    initialValues: {
        email: undefined,
        password: undefined,
        selectedUser: {},
        roles: []
    }
})(Register);

export default Register;