import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link  className="navbar-brand" to="/"> Task </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link  className="nav-link" to="/"> Tasks </Link>
                            </li>
                            <li className="nav-item">
                            <Link  className="nav-link" to="/create"> Crear </Link>
                            </li>
                            <li className="nav-item">
                            <Link  className="nav-link" to="/user"> Usuarios </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
