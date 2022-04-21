import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();
  const handleChange = (event: any) => {
    event.persist();
    console.log(data)
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
    console.log(data)
  };

  const handleSubmit = (event: any) => {
    event.persist();
    console.log("ha")
    console.log(data)
    axios
      .post(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users`, data)
      .then((data) => [
        navigate("/")
      ]);
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
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="address"
              placeholder="Enter address"
              defaultValues={data.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="birthday"
              placeholder="Enter birthday"
              defaultValues={data.birthday}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="email"
              placeholder="Enter email"
              defaultValues={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              defaultValues={data.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-btn">
            {/* <Button button="Cancel" className ="btn-cancel" onSubmitFormLogin={handleSubmit} /> */}
            {/* <Button button="Submit" onSubmitFormLogin={e => handleSubmit(e)} /> */}
            <button onClick={handleSubmit} >submit</button>
          </div>
      
      </div>
    </div>
  );
};
export default CreateUser;
