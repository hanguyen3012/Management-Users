import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Button from "../../atoms/Button/button";
import RowTitle from "../../molecules/UserRow/RowTitle";
import Anchor from "../../atoms/Anchor/anchor";
import { Link } from 'react-router-dom';
export interface Values {
  id: number;
  username: string;
  birthday: string;
  email: string;
  phone: number;
  address: string;
}
const Table = (props: any) => {
  const [data, setData] = useState([] as Values[]);

  const getUsers = async () => {
    const users = await axios.get(
      "https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users"
    );
    setData(users.data);
    console.log(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (e: any, id: number)=>{
    e.persist();
    console.log(id)
    await axios.delete("https://625fae6c53a42eaa07f8d2f5.mockapi.io/mana-users/" + id).then(data_ => {
      getUsers();
  })
  }
  return (
    <div>
     <Anchor href={props.href} text = {props.text}/>
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
                <Link to={`edit/${item.id}`}><button>Edit</button></Link>
                <Button button = "Delete" onSubmitFormLogin={e => deleteUser(e, item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  Text: PropTypes.string,
  href: PropTypes.string
  
};

Table.defaultProps = {
  className: "title",
  text: "Create User",
  href: "./create"
};

export default Table;
