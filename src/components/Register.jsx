import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    const handleRegister= (event) => {

       event.preventDefault();
       const email= event.target.email.value;
       const password= event.target.password.value;
       const name= event.target.name.value;

       console.log(name,email,password)

    }


    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Please Register now!</h1>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onClick={handleRegister} className="card-body">

      <div className="form-control">
        <label className="label">
        <span className="label-text">Name</span>
        </label>
     <input type="text" name='name' placeholder="enter your name" className="input input-bordered" required />
     </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to='/login' className="btn btn-link">Already Have an Account? Please Register</Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default Register;