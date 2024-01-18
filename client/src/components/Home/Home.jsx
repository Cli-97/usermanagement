import './Home.css';
import { Link } from 'react-router-dom';
import { FaCartArrowDown, FaUserAlt, FaSafari, FaTasks } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='d-flex home'>
      <div className='d-flex sidebar flex-column flex-shrink-0 text-white bg-dark'>
        <ul className='nav nav-pills flex-column mb-auto px-0'>
          <li className='nav-item'>
            <a href="" className='nav-link text-white'>
              <FaSafari /> <Link to="/home">Dashboard</Link></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white'>
              <FaTasks /> <Link to="/roles">Roles</Link></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white'>
              <FaUserAlt /> <Link to="/permissions">Permissions</Link></a>
          </li>
        </ul>
      </div>
      <div className='content container mt-3'>
        <div className='row'>
          <div className='col-md-4 text-white col bg-success d-flex
          justify-content-around px-1 py-3 rounded'>
            <p>Total Users</p>
          </div>
        </div>
        <div className='col-md-4 text-white col bg-success d-flex
          justify-content-around px-1 py-3 rounded'>
          <p>Total Roles</p>
        </div>
        <div className='col-md-4 text-white col bg-success d-flex
          justify-content-around px-1 py-3 rounded'>
          <p>Total Permissions</p>
        </div>
      </div>
      <table className='table w-100'>
        <thead>
          <tr>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
            <th scope='col'>Role</th>
            <th scope='col'>Permission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><button className='btn btn-success mx-2'>Add</button>
              <button className='btn btn-danger'>remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>


  )
}

export default Home