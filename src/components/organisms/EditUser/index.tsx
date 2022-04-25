import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { IValues } from "../../../shared/constants";
import userSchema from "../../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditUser = (props: any) => {
  const [data, setData] = useState({} as IValues);

  const { id } = useParams();
  let navigate = useNavigate();

  const getUsers = async () => {
    const users = await axios.get(
      "https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/" + id
    );
    setData(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IValues>({
    resolver: yupResolver(userSchema),
  });

  const handleChange = (event: any) => {
    event.persist();
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async(data: IValues) => {
    await axios
      .put(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/` + id, data)
      .then((data) => {
        navigate("/");
      });
  };

  return (
    <div className="container">
      <div className="add-form">
        <h2>Edit user</h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Input
              type="text"
              {...register("username")}
              placeholder="Enter username"
              defaultValue={data.username}
              onChange={handleChange}
              className={`form-control ${errors.username? "is-invalid" : ""}`}
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
            />
            <div className="invalid-feedback">{errors.phone?.message}</div>
          </div>
          <div className="form-btn">
            <Link to={`/`}>
              {" "}
              <Button
                button="Reset"
                className="btn-cancel"
                onSubmitFormLogin={() => reset()}
              />
            </Link>
            <button
              className="btn-submit"
              type="submit"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditUser;
