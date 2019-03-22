import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { CheckboxGroup } from '../../components';

class Register extends React.Component {

    componentWillMount() {
        const selectedUser = this.props.history.location.state !== undefined ? this.props.history.location.state.selectedUser : undefined;
        if (selectedUser) this.props.initialize({ email: selectedUser.email })
    }
    onSubmit(data) {
        const { updateUser, addUser, history  } = this.props;
        const selectedUser = this.props.history.location.state !== undefined ? this.props.history.location.state.selectedUser : undefined;
        if(selectedUser){
            return updateUser(Object.assign(data, {id : selectedUser.id })).then(() => history.push('/admin'));
        }
        else{
            return addUser(data).then(() => history.push('/admin'));;
        }
     
    }

    render() {
        const options = [
            { label: 'ADMIN', value: 'ADMIN' },
            { label: 'PAGE_1', value: 'PAGE_1' },
            { label: 'PAGE_2', value: 'PAGE_2' },
            { label: 'PAGE_3', value: 'PAGE_3' }
        ];
        const { handleSubmit } = this.props;
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
                        <Link to="/admin" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div >
        );
    }
}

Register = reduxForm({
    form: 'Register',
    fields: ['email', 'password', 'roles'],
    initialValues: {
        email: undefined,
        password: undefined,
        roles: []
    }
})(Register);

export default Register;