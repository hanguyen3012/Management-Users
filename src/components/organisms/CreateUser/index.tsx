import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { FormInput } from "../../atoms/InputForm"
import { showLoader } from "../../../redux/actions/application";
import { hideLoader } from "../../../redux/actions/application";
import PageLoader from "../../../pages/PageLoad/pageLoad"
import "./index.css";
import axios from "axios";

interface IFormInputs {
  id: string;
  username: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
}
const CreateUser: React.FC = (props: any) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email(t('auth:email_is_required')).required(t('auth:password_is_required')),
    username: yup.string().required(t('auth:username_is_required')),
    address: yup.string().required(t('auth:address_is_required')),
    birthday: yup.string().required(t('auth:birthay_is_required')),
    phone: yup
      .string()
      .required(t('auth:phone_is_required'))
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    console.log(data)
    dispatch(showLoader())
    return await axios
      .post(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users`, data)
      .then(data => {
        console.log(data);
        dispatch(hideLoader());
        navigate("/")
      });

  };
  return (
    <div className="container">
      <PageLoader />
      <div className="add-form">
        <h2>Add new user</h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <FormInput
              placeholder="Enter username"
              name="username"
              type="text"
              control={control}
              className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <FormInput
              type="text"
              name="address"
              placeholder="Enter address"
              control={control}
              className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <FormInput
              type="date"
              name="birthday"
              control={control}
              errors={errors}
              className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
              placeholder="Enter birthday"
            />
          </div>
          <div className="form-group">
            <FormInput
              type="email"
              name="email"
              control={control}
              errors={errors}
              className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <FormInput
              type="text"
              control={control}
              name="phone"
              errors={errors}
              className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-btn">
            <button className="btn-submit" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;





