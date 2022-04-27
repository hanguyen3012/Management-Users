import Button from "../../atoms/Button";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import userSchema from "../../../Validations";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FormInput } from "../../atoms/InputForm"

interface IFormInputs {
  id: string;
  username: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
}

const EditUser = (props: any) => {
  const [data, setData] = useState({} as IFormInputs);

  const { id } = useParams();
  const [t] = useTranslation();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email(t('auth:email_is_required')).required(t('auth:password_is_required')),
    username: yup.string().required(t('auth:username_is_required')),
    address: yup.string().required(t('auth:address_is_required')),
    birthday: yup.string().required(t('auth:birthay_is_required')),
    phone: yup
      .string()
      .required(t('auth:phone_is_required'))
  });

  const getUsers = async () => {
    const users = await axios.get(
      "https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/" + id
    );
    setData(users.data);
    console.log(data)
  };

  useEffect(() => {
    getUsers();
  }, []);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data: IFormInputs) => {
    console.log(data)
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
            <FormInput
              placeholder="Enter username"
              name="username"
              type="text"
              defaultValue={data.username}
              control={control}
              className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <FormInput
              type="text"
              name="address"
              defaultValue={data.address}
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
              defaultValue={data.birthday}
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
              defaultValue={data.email}
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
              defaultValue={data.phone}
              errors={errors}
              className="form-control mg-b-0 width-190 height-30 font-size-8 text-normal"
              placeholder="Enter phone number"
            />
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





// // import Input from "../../atoms/Input";
// import Button from "../../atoms/Button";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// // import { IValues } from "../../../shared/constants";
// import userSchema from "../../../Validations";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { FormInput } from "../../atoms/InputForm"

// export interface IValues {
//   id: number;
//   username: string;
//   birthday: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// const EditUser = (props: any) => {
//   const [data, setData] = useState({} as IValues);

//   const { id } = useParams();
//   let navigate = useNavigate();

//   const getUsers = async () => {
//     const users = await axios.get(
//       "https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/" + id
//     );
//     setData(users.data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     control,
//     formState: { errors },
//   } = useForm<IValues>({
//     resolver: yupResolver(userSchema),
//   });

//   const handleChange = (event: any) => {
//     event.persist();
//     setData((data) => ({
//       ...data,
//       [event.target.name]: event.target.value,
//     }));
//     console.log(data)
//   };

//   const onSubmit = async(data: IValues) => {
//     await axios
//       .put(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/` + id, data)
//       .then((data) => {
//         navigate("/");
//       });
//   };

//   return (
//     <div className="container">
//       <div className="add-form">
//         <h2>Edit user</h2>
//         <hr />
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-group">
//             <FormInput
//               type="text"
//               {...register("username")}
//               placeholder="Enter username"
//               defaultValue={data.username}
//               onChange={handleChange}
//               control="control"
//               className={`form-control ${errors.username? "is-invalid" : ""}`}
//               errors={errors}
//             />
//           </div>
//           <div className="form-group">
//             <FormInput
//               type="text"
//               {...register("address")}
//               placeholder="Enter address"
//               defaultValue={data.address}
//               control="control"
//               onChange={handleChange}
//               errors={errors}
//             />
//           </div>
//           <div className="form-group">
//             <FormInput
//               type="date"
//               {...register("birthday")}
//               placeholder="Enter birthday"
//               defaultValue={data.birthday}
//               control="control"
//               onChange={handleChange}
//               errors={errors}
//             />
//           </div>
//           <div className="form-group">
//             <FormInput
//               type="email"
//               {...register("email")}
//               placeholder="Enter email"
//               defaultValue={data.email}
//               control="control"
//               onChange={handleChange}
//               errors={errors}
//             />
//           </div>
//           <div className="form-group">
//             <FormInput
//               type="text"
//               {...register("phone")}
//               placeholder="Enter phone number"
//               defaultValue={data.phone}
//               control="control"
//               onChange={handleChange}
//               errors={errors}
//             />
//           </div>
//           <div className="form-btn">
//             <Link to={`/`}>
//               {" "}
//               <Button
//                 button="Reset"
//                 className="btn-cancel"
//                 onSubmitFormLogin={() => reset()}
//               />
//             </Link>
//             <button
//               className="btn-submit"
//               type="submit"
//             >Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default EditUser;

