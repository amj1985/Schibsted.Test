import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../common/utils';
export default class Navigation extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div> {!isEmpty(user) &&
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <br></br>
                            <Link className="nav-item nav-link" to="/admin">ADMIN</Link>
                            <Link className="nav-item nav-link" to="/page_1">PAGE_1</Link>
                            <Link className="nav-item nav-link" to="/page_2">PAGE_2</Link>
                            <Link className="nav-item nav-link" to="/page_3">PAGE_3</Link>
                        </div>
                    </div>
                </nav>
            }
            </div>

        )

    }
}