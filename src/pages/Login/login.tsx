import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import { useNavigate, Link } from "react-router-dom";
import userSchema from "../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
export interface IValues {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [data, setData] = useState({} as IValues);
  const [data1, setData1] = useState({} as IValues);
  const navigate = useNavigate();
  const handleChange = (event: any) => {
    event.persist();

    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IValues>({
    resolver: yupResolver(userSchema),
  });

  const getUsers = async () => {
    const users = await axios.get(
      "https://625fae6c53a42eaa07f8d2f5.mockapi.io/account"
    );
    setData1(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onSubmit = async (value: IValues) => {
    navigate("/list");
  };
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                defaultValue=""
                onChange={handleChange}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="input-container">
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                defaultValue=""
                onChange={handleChange}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="button-container">
              <button type="submit" className="btn-login">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
