import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Button from "../../atoms/Button";
import { connect, useDispatch } from 'react-redux';
import RowTitle from "../../molecules/UserRow/RowTitle";
import Anchor from "../../atoms/Anchor";
import { Link } from "react-router-dom";
import PageLoader from "../../../pages/PageLoad/pageLoad";
import { hideLoader, showLoader } from "../../../redux/actions/application";

export interface IValues {
  id: number;
  username: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
}

const Table = (props: any) => {
  const [data, setData] = useState([] as IValues[]);
  const dispatch = useDispatch();
  const getUsers = async () => {
    const users = await axios.get(
      "https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users"
    );
    setData(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (e: any, id: number) => {
    e.persist();
    dispatch(showLoader())
    await axios
      .delete("https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/" + id)
      .then((data_) => {
        dispatch(hideLoader());
        getUsers();
      });
  };

  return (
    <div>
      <PageLoader />
      <button className="btn-add">
        <Anchor href="./create" text="Add" />
      </button>
      <table>
        <thead>
          <RowTitle />
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.address}</td>
              <td>{new Date(item.birthday).toLocaleDateString("en-US")}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td className="btn-action">
                <Link to={`edit/${item.id}`}>
                  <button className="btn-edit">Edit</button>
                </Link>
                <Button
                  className="btn-delete"
                  button="Delete"
                  onSubmitFormLogin={(e) => deleteUser(e, item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state: any) => ({})
export default connect(mapStateToProps)(Table);
