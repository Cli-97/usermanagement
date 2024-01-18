import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Navigation/Nav';

const Header = () => {
  return (
    <div className='header'>
      <div className='d-flex justify-content-around'>

      </div>
      <div className='d-flex align-items-center'>
        <h2>User Management</h2>
      </div>
      <Nav />
    </div>


  )
}

export default Header