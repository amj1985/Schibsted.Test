import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PrivateRoute } from '../privateRoute';
import { Admin, Home, Login, Navigation, Page1, Page2, Page3, Register } from '../../containers';

export default class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={createBrowserHistory()}>
                            <div>
                                <Navigation />
                                <PrivateRoute exact path="/" component={Home} />
                                <Route path="/login" component={Login} />
                                <PrivateRoute path="/admin" component={Admin} />
                                <PrivateRoute path="/page_1" component={Page1} />
                                <PrivateRoute path="/page_2" component={Page2} />
                                <PrivateRoute path="/page_3" component={Page3} />
                                <PrivateRoute path="/register" component={Register} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
