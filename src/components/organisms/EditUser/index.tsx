import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
// import "./index.css";
import axios from "axios";
export interface IValues {
  id: string;
  username: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
}
const EditUser = (props: any) => {
  const [data, setData] = useState({} as IValues);
  const [error, setError] = useState("");

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
  const handleChange = (event: any) => {
    event.persist();
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.persist();
  try{
    console.log("submit", data);
    await axios
      .put(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/` + id, data)
      .then((data) => {
        navigate("/");
      });
    } catch (error){
      console.log(error)
    }
  };
  return (
    <div className="container">
      <div className="add-form">
        <h2>Edit user</h2>
        <hr />
        <div className="form-group">
          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            defaultValues={data.username}
            onChange={handleChange}
          />
          {error !== "" ?( <div
                    style={{ fontFamily: "roboto" }}
                    className="error text-danger text-center"
                  >
                    {error}
                  </div>):("")}
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
            type="date"
            name="birthday"
            placeholder="Enter birthday"
            defaultValues={data.birthday}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Input
            type="email"
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
        <Link to={`/`}> <Button button="Cancel" className ="btn-cancel"  /></Link>
          <Button className="btn-submit" button="Submit" onSubmitFormLogin={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
export default EditUser;
