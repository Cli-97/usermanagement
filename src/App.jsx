import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Users/login/Login';
import Register from './components/Users/login/register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Permissions from './components/Home/Permissions/Permissions';
import Roles from './components/Home/Roles/Roles';
import Home from './components/Home/Home';
import forgotPassword from './components/Users/login/forgotPassword';


function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/permissions" element={<Permissions />}>

          </Route>
          <Route path="/roles" element={<Roles />}>

          </Route>
          <Route path="/forgotPassword" element={<forgotPassword />}>

          </Route>
          <Route path="/footer" element={<Footer />}>

          </Route>
          <Route path="/header" element={<Header />}>

          </Route>
          <Route path="/home" element={<Home />}>

          </Route>
          <Route path="/register" element={<Register />}>

          </Route>
          <Route path="/" element={<Login />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
