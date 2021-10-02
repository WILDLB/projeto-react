import React from 'react';
import Home from '../views/home';



function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a className="navbar-brand" href="produtos">Produtos</a>
        <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarColor01" 
            aria-controls="navbarColor01" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                    <a className="nav-link" href= {Home}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href= 'cadastro'>Cadastro</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="consulta">Consulta</a>
                </li>        
            </ul>
        </div>
    </div>
</nav>
    )
}

export default Navbar;