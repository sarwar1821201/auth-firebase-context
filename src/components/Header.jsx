import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';


const Header = () => {

   const {user, logOut} = useContext(AuthContext)

  const handleLogout=() => {
     logOut()
     .then( () => {} )
     .catch(error => console.log (error) )
  }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Auth Context</Link>
            <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl"  to='/orders'>Orders</Link>
            {
                user &&  <Link className="btn btn-ghost normal-case text-xl"  to='/profile'>Profile</Link>

            }
            <Link  className="btn btn-ghost normal-case text-xl" to='/login' >Login</Link>
            <Link  className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

            {
               // user ? <span>{user.email}</span> : <button className='btn btn-link'>Sign Out</button>
               user ? <>
                 <span> {user.email} </span>
                 <button onClick={handleLogout} className='btn btn-xs ps-2 ml-2'>Sign Out</button>
               </> : 
               <Link to='/login' >Login</Link>
            }

            </div>

        </div>
    );
};

export default Header;


