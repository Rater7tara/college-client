import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../../assets/education-logo.png'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const navItems = <>
  <li className='bg-lime-100 rounded-md hover:bg-lime-300'><Link to='/home'>Home</Link></li>
  <li className='bg-rose-100 rounded-md hover:bg-rose-300'><Link to='/colleges'>Colleges</Link></li>
  <li className='bg-yellow-100 rounded-md hover:bg-yellow-300'><Link to='/admission'>Admission</Link></li>
  {user?.email ? <>
    
    <li className='bg-sky-100 rounded-md hover:bg-sky-300'><Link to='/myCollege'>My College</Link></li>
    
    </>
       :
      <Link to="/login">
      </Link>
    }
  
</>


return (

<div className='nav-div'>
<div className="navbar bg-base-100 h-28">

  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to ="/"><img className='logo' src={logo} /></Link>

    {/* <a className="btn btn-ghost normal-case text-2xl font-black"> */}

    <a className="btn btn-ghost normal-case lg:text-2xl sm:text-lg font-black">

      <span className='text-purple-500'>EduTch</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      {navItems}

    </ul>
  </div>
  <div className="navbar-end">
  {
      
      user?.photoURL ?<img src={user.photoURL} className=" user-img rounded-full me-2 " alt="" title={user.displayName} />:<FaUser className='user-img rounded-full me-2 text-3xl'></FaUser>
     }
    {user?
      
    <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
    
       :
      <Link to="/login">
        <button className="btn bg-purple-500">Login</button>
      </Link>
    }
  </div>
</div>

</div>


);
};

export default NavBar;