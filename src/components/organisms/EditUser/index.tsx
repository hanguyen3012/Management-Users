import Button from "../../atoms/Button";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { hideLoader, showLoader } from "../../../redux/actions/index";
import { FormInput } from "../../atoms/InputForm";
import PageLoader from "../../../pages/PageLoad";

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
  const dispatch = useDispatch();
  const { id } = useParams();
  const [t] = useTranslation();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("auth:email_is_required"))
      .required(t("auth:password_is_required")),
    username: yup.string().required(t("auth:username_is_required")),
    address: yup.string().required(t("auth:address_is_required")),
    birthday: yup.string().required(t("auth:birthay_is_required")),
    phone: yup.string().required(t("auth:phone_is_required")),
  });

  useEffect(() => {
    function getFetchUrl() {
      return "https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/" + id;
    }
    async function fetchData() {
      const result = await axios(getFetchUrl());
      setData(result.data);
    }
    fetchData();
  }, [id]);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    dispatch(showLoader());
    await axios
      .put(`https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/` + id, data)
      .then((data) => {
        dispatch(hideLoader());
        navigate("/");
      });
  };

  return (
    <div className="container">
      <PageLoader />
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
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({});
export default connect(mapStateToProps)(EditUser);
