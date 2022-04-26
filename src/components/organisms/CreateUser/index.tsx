import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import userSchema from "../../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { IValues } from "../../../shared/constants";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
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
    console.log(data);
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
    console.log(data);
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IValues>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: IValues, event: any) => {
    event.persist();
    return await axios
      .post(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users`, data)
      .then((data) => [navigate("/")]);
  };
  return (
    <div className="container">
      <div className="add-form">
        <h2>Add new user</h2>
        <hr />
        <form onSubmit={(event) => handleSubmit(onSubmit)(event)}>
          <div className="form-group">
            <Input
              placeholder="Enter username"
              name="username"
              type="text"
              control="control"
              // {...register("username")}
              // defaultValues={data.username}
              // onChange={handleChange}
              // className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />
            {/* <div className="invalid-feedback">{errors.username?.message}</div> */}
          </div>
          <div className="form-group">
            <Input
              type="text"
              // {...register("address")}
              placeholder="Enter address"

              // defaultValues={data.address}
              // onChange={handleChange}
              // className={`form-control ${errors.address ? "is-invalid" : ""}`}
            />
            {/* <div className="invalid-feedback">{errors.address?.message}</div> */}
          </div>
          <div className="form-group">
            <Input
              type="date"
              name="birthday"
              // {...register("birthday")}
              placeholder="Enter birthday"
              // defaultValues={data.birthday}
              // onChange={handleChange}
              // className={`form-control ${errors.birthday ? "is-invalid" : ""}`}
            />
            {/* <div className="invalid-feedback">{errors.birthday?.message}</div> */}
          </div>
          <div className="form-group">
            <Input
              type="email"
              name="email"
              // {...register("email")}
              placeholder="Enter email"
              // defaultValues={data.email}
              // onChange={handleChange}
              // className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="phone"
              // {...register("phone")}
              placeholder="Enter phone number"
              // defaultValues={data.phone}
              // onChange={handleChange}
              // className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            />
            {/* <div className="invalid-feedback">{errors.phone?.message}</div> */}
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

//   const handleSubmit = (event: any) => {
//     event.persist();
//     console.log("ha");
//     console.log(data);
//     axios
//       .post(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users`, data)
//       .then((data) => [navigate("/")]);
//   };
//   return (
//     <div className="container">
//       <div className="add-form">
//         <h2>Add new user</h2>
//         <hr />

//         <div className="form-group">
//           <Input
//             control={control}
//             type="username"
//             name="username"
//             placeholder="Enter username"
//             defaultValues={data.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <Input
//             type="text"
//             name="address"
//             placeholder="Enter address"
//             defaultValues={data.address}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <Input
//             type="text"
//             name="birthday"
//             placeholder="Enter birthday"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <Input
//             type="text"
//             name="email"
//             placeholder="Enter email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <Input
//             type="text"
//             name="phone"
//             placeholder="Enter phone number"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-btn">
//           {/* <Button button="Cancel" className ="btn-cancel" onSubmitFormLogin={handleSubmit} /> */}
//           {/* <Button button="Submit" onSubmitFormLogin={e => handleSubmit(e)} /> */}
//           <button onClick={handleSubmit}>submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CreateUser;
