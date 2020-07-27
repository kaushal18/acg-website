import React from "react";
import "./styles/form.css";

const Form = ({ values, onChange, onSubmit }) => {
  return (
    <form className="form-signin" onSubmit={onSubmit}>
      <div className="loginFormBg">
        <div className="welcm text-center">Welcome!</div>
        <div className="hr mTB20"></div>
        <div className="pad20 text-left">
          <div className="form-group">
            <label className="labelStyle text-left">Email ID</label>
            <input
              type="email"
              name="email"
              value={values.email}
              className="form-control form-control-sm"
              id="loginid"
              placeholder="Enter Email ID"
              onChange={onChange}
              autoFocus
            />
          </div>
          <div className="form-group">
            <label className="labelStyle text-left">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              className="form-control form-control-sm"
              id="loginpassword"
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block loginBtn">
            <div className="logintxt">Login</div>
          </button>
          <div className="forgetpass text-center">
            <a href="/">Forgot password?</a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
