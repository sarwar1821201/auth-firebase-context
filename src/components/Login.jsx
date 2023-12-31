import React, { createContext } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

   const {signIn, signInWithGoogle} = useContext(AuthContext)

  const handleLogin= (event) => {
       event.preventDefault();

       const email= event.target.email.value;
       const password= event.target.password.value;

       console.log(email,password)

       signIn(email,password)
       .then(result => {
          const loggedUser= result.user;
          console.log(loggedUser)
          event.target.reset()
       } )

       .catch(error => {
           console.log(error.message)
       } )

  }


  const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then( result => {
        const loggedUser= result.user;
        console.log(loggedUser)
      } )

      .catch(error => {
         console.log(error)
      }  )
  }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Login now!</h1>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <Link to='/register' >
      <button className="btn btn-link">New To This Site? Please Register  </button>
      </Link>

      <div>
        <button onClick={handleGoogleSignIn} className='btn btn-link'  > Sign In With Google</button>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;