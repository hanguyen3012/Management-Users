import { FormInput } from "../../components/atoms/Input"
import Button from "../../components/atoms/Button";
import { useNavigate, Link } from "react-router-dom";
import userSchema from "../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import "./login.css";
import axios from "axios";
interface IFormInputs {
  email: string;
  password: string;
}

const Login = (props: any) => {
  const [t] = useTranslation();
  // const dispatch = useDispatch();
  const [data, setData] = useState({})
  const navigate = useNavigate();
  // const { error } = props;



  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(userSchema),
  });

  const getUsers = async () => {
    const users = await axios.get(
      "https://625fae6c53a42eaa07f8d2f5.mockapi.io/account"
    );
    setData(users.data);
  };

  useEffect(() => {
    // console.log(ref.current)
    // ref.current = data;
    getUsers();

  }, []);

  const onSubmit = async (value: IFormInputs) => {
    console.log(value)
    navigate("/list");
  };
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <FormInput
                control={control}
                name="email"
                type="email"
                className="form-control width-190 height-30 font-size-8 text-normal "
                placeholder={t('auth:email')}
                errors={errors}
              />
            </div>
            <div className="input-container">
              <FormInput
                control={control}
                name="password"
                type="password"
                className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
                placeholder={t('auth:password')}
                errors={errors}
              />
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
// const mapStateToProps = (state: any) => ({
//   error: state.authReducer.error,
// });
export default (Login);
