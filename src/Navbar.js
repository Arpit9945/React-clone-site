import React from 'react'
import { Link } from 'react-router-dom';
import MyImage from './images/MyImage.png'
import './App.css'

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg p-0 fw-bold fs-5">
                <div className="container-fluid ms-2" id='nav'>
                    <a className="navbar-brand" href="/"><img src={MyImage} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* --------------------------------Search--------------------------------------------------------- */}

                    <div className="search">
                        <input type="text" className="search__input fw-bold" placeholder="Search" />
                        <button className="search__button">
                            <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>

                    {/* ------------------X-------------Search-----------------X--------------------------------------- */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-dark">
                            <li className="nav-item">
                                <Link to='/learn'
                                    className="nav-link" href="#">Learn</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/reference' className="nav-link" href="#">Reference</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/community' className="nav-link" href="#">
                                    Community
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blog' className="nav-link" aria-disabled="true">Blog</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu;
