import './style.css'
import logo from '../Imagens/logo-cat-dog.svg'

import { Link } from 'react-router-dom';

const NavBar = () => {
    return <nav className="navbar">
        <Link className="logo" to="/">
            <img src={logo} width="80px" alt="logo" />
        </Link>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/produtos">Produtos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/servicos">Serviços</Link>
            </li>
        </ul>
    </nav>
}

export default NavBar;