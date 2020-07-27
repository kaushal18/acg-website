import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Form from "./form";
import Loader from "./loader";
import Logo from "./logo";
import "./styles/login.css";

const Login = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const componentToRender = splash ? (
    <Loader />
  ) : (
    <Form values={values} onChange={handleChange} onSubmit={handleSubmit} />
  );

  return (
    <React.Fragment>
      <div className="bgImgLogin">
        <div className="text-center centerbox">
          <Logo />
          {componentToRender}
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; ACG Engineering, 2019-20. All rights reserved.
      </div>
    </React.Fragment>
  );
};

export default Login;
