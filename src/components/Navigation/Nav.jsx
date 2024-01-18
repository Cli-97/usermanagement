import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
    

  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <button className='navbar-toggler' data-bs-toggle='collapse'
                    data-bs-target="#navbarm" aria-controls='navbarm' aria-expanded='false'
                    aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-md-center' id='navbarm'>
                    <ul className='navbar-nav'>
                        <li className='nav-item mx-2'>
                            <a className='nav-link text-white'><Link to="/home">Home</Link></a>
                        </li>
                        <li className='nav-item mx-2'>
                            <a className='nav-link text-white'><Link to="/roles">Roles</Link></a>
                        </li>
                        <li className='nav-item mx-2'>
                            <a className='nav-link text-white'><Link to="/permissions">Permissions</Link></a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    </div>
 )
}

export default Nav
