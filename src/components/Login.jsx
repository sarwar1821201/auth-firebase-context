import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLogin= (event) => {
       event.preventDefault();

       const email= event.target.email.value;
       const password= event.target.password.value;

       console.log(email,password)

  }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Login now!</h1>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onClick={handleLogin} className="card-body">
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

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;