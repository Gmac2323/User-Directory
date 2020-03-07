import React from "react";

function UserTable(props) {
  return (
    <table class="table" id="myTable">
      <thead>
        <tr>
          <th scope="col" onClick={() => props.idSort(props.id)}>
            #
          </th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Desk Phone</th>
          <th scope="col" onClick={() => props.hasMobile(props.id)}>
            Mobile Phone
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default UserTable;