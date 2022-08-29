import React from 'react'
import Link from 'next/link';
const Login = () => {
  return (
   <>
   <div className="row w-100 mx-0">
  <div className="col-lg-4 mx-auto">
    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
      <div className="brand-logo">
        <img src="images/fav.png" alt="logo" />
      </div>
      <h4>Hello! let's get started</h4>
      <h6 className="font-weight-light">Sign in to continue.</h6>
      <form className="pt-3">
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            id="exampleInputEmail1"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mt-3">
          <button
            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
          >
            SIGN IN
          </button>
        </div>
        <div className="my-2 d-flex justify-content-between align-items-center">
          <div className="form-check">
            <label className="form-check-label text-muted">
              <input type="checkbox" className="form-check-input" />
              Keep me signed in
              <i className="input-helper" />
            </label>
          </div>
          <a href="#" className="auth-link text-black">
            Forgot password?
          </a>
        </div>
        
        <div className="text-center mt-4 font-weight-light">
          Don't have an account?{" "}
         
          <Link href="/register" >
              <a className="text-primary">
                Create
              </a>
            </Link>
        </div>
      </form>
    </div>
  </div>
</div>

   </>
  )
}

export default Login