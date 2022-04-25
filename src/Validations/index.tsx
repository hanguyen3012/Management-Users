import * as yup from "yup";
const userSchema = yup.object().shape({
    username: yup.string().required("Username is required please !"),
    email: yup
      .string()
      .email("Please enter a valid email format !")
      .required("Email is required please !"),
    address: yup.string().required("Address is require please !"),
    birthday: yup.string().required("Birthday is require please !"),
    phone: yup
      .string()
      .min(10, "Phone number contain at least 10 numbers")
      .max(11, "Phone number contain at least 11 numbers")
      .required("Phone number is requires please !"),
  });
  
export default userSchema;