import React from 'react';
import { CartWidget } from './CartWidget.jsx';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <img src="/images/unik_logo.png" alt="Logo Unik Pet Nutrition" />
                <a className="navbar-brand" href="/">Unik´s Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Link</a></li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Perro</a></li>
                                <li><a className="dropdown-item" href="/">Gato</a></li>
                            </ul>
                        </li>
                        <li><CartWidget /></li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}
