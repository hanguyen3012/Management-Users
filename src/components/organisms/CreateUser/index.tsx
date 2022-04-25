import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import userSchema from "../../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IValues } from "../../../shared/constants";

import "./index.css";
import axios from "axios";

const CreateUser: React.FC = () => {
  const [data, setData] = useState({} as IValues);

  let navigate = useNavigate();
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

  const onSubmit = async (data: IValues) => {
    await axios
      .post(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users`, data)
      .then((data) => [navigate("/")]);
  };
  return (
    <div className="container">
      <div className="add-form">
        <h2>Add new user</h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Input
              type="text"
              placeholder="Enter username"
              {...register("username")}
              defaultValue={data.username}
              onChange={handleChange}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>
          <div className="form-group">
            <Input
              type="text"
              {...register("address")}
              placeholder="Enter address"
              defaultValue={data.address}
              onChange={handleChange}
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.address?.message}</div>
          </div>
          <div className="form-group">
            <Input
              type="date"
              {...register("birthday")}
              placeholder="Enter birthday"
              defaultValue={data.birthday}
              onChange={handleChange}
              className={`form-control ${errors.birthday ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.birthday?.message}</div>
          </div>
          <div className="form-group">
            <Input
              type="email"
              {...register("email")}
              placeholder="Enter email"
              defaultValue={data.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="form-group">
            <Input
              type="text"
              {...register("phone")}
              placeholder="Enter phone number"
              defaultValue={data.phone}
              onChange={handleChange}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.phone?.message}</div>
          </div>
          <div className="form-btn">
            <Link to={`/list`}>
              <Button
                button="Reset"
                className="btn-cancel"
                onSubmitFormLogin={() => reset()}
              />
            </Link>
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
