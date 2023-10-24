import React from 'react';
import  './styles.css'

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="https://ih1.redbubble.net/image.5210493345.9166/raf,360x360,075,t,fafafa:ca443f4786.jpg" className="rounded mx-auto d-block" alt="..." />

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label py-3">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
