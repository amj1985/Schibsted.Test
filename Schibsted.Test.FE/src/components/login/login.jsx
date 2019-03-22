import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
    componentWillMount(){
        const { logout } = this.props; 
        const user = localStorage.getItem('user');
        if(user){
            var res  = JSON.parse(user)
            return logout(res.email);
        }
    }
    onSubmit(data) {
        const { login, history } = this.props;
        const { email, password } = data;
        if (email && password) {
            return login({ email, password }).then((user) => {
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/');
            });
        }
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
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
                    <div className={"form-group"}>
                        <button className="btn btn-primary" type="submit">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}
Login = reduxForm({
    form: 'Login',
    fields: ['email', 'password'],
    initialValues: {
        email: undefined,
        password: undefined
    }
})(Login);

export default Login;