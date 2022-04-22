import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
export interface IValues {
  id: string;
  username: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
}
export interface IFormState {
  [key: string]: any;
  values: IValues[];
  submitSuccess: boolean;
  loading: boolean;
}
const defaultValues: IValues = {
  id: "",
  username: "",
  birthday: "",
  email: "",
  phone: "",
  address: "",
};
const CreateUser: React.FC = () => {
  const [data, setData] = useState(defaultValues as IValues);
  const [errUsername, setErrUsername] = useState("");
  const [errBirthday, setErrBirthday] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errEmail, setErrEmail] = useState("");
  let navigate = useNavigate();
  const handleChange = (event: any) => {
    event.persist();
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.persist();
    try {
      if (!data.username) {
        setErrUsername("You must enter the username!");
      } else if (!data.birthday) {
        setErrBirthday("You must enter the birthday!");
      } else if (!data.address) {
        setErrAddress("You must enter the address!");
      } else if (!data.phone) {
        setErrPhone("You must enter the phone number!");
      } else if (!data.email) {
        setErrEmail("You must enter the email!");
      } else {
        setErrUsername("");
        setErrBirthday("");
        setErrAddress("");
        setErrPhone("");
        setErrEmail("");
        await axios
          .post(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users`, data)
          .then((data) => [navigate("/")]);
      }
      console.log(data.username);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="add-form">
        <h2>Add new user</h2>
        <hr />

        <div className="form-group">
          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            defaultValues={data.username}
            onChange={handleChange}
          />
          {errUsername !== "" ? (
            <div style={{ fontFamily: "roboto", color: "red" }}>
              {errUsername}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Input
            type="text"
            name="address"
            placeholder="Enter address"
            defaultValues={data.address}
            onChange={handleChange}
          />
          {errAddress !== "" ? (
            <div style={{ fontFamily: "roboto", color: "red" }}>
              {errAddress}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Input
            type="date"
            name="birthday"
            placeholder="Enter birthday"
            defaultValues={data.birthday}
            onChange={handleChange}
          />
          {errBirthday !== "" ? (
            <div style={{ fontFamily: "roboto", color: "red" }}>
              {errBirthday}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            defaultValues={data.email}
            onChange={handleChange}
          />
          {errEmail !== "" ? (
            <div style={{ fontFamily: "roboto", color: "red" }}>{errEmail}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <Input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            defaultValues={data.phone}
            onChange={handleChange}
          />
          {errPhone !== "" ? (
            <div style={{ fontFamily: "roboto", color: "red" }}>{errPhone}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-btn">
          <Link to={`/`}>
            {" "}
            <Button button="Cancel" className="btn-cancel" />
          </Link>
          <Button
            className="btn-submit"
            button="Submit"
            onSubmitFormLogin={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </div>
  );
};
export default CreateUser;
