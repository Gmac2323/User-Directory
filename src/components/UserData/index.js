import React from "react";

function UserData(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.deskPhone}</td>
        <td>{props.mobilePhone}</td>
      </tr>
    </>
  );
}

export default UserData;