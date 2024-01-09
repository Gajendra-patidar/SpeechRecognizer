import './Navbar.css';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h3>SpeechRecognition</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mx-4" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-4" to="/Convertor">Convertor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-4" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-4" to="/Contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <button className='signup' type='submit'>SignUp</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

