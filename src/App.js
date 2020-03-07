import React, { Component } from "react";
import UserTable from "./components/UserTable";
import UserData from "./components/UserData";
import Wrapper from "./components/Wrap";
import Title from "./components/Title";
import employees from "./employee.json";

class App extends Component {
  // Setting state to employees json array
  state = {
    employees
  };

  // Sort id
  idSort = id => {
    const employees = this.state.employees.sort(function (a, b) {
      return b.id - a.id;
    });
    this.setState({ employees });
  };

  hasMobile = hasMobile => {
    const employees = this.state.employees.filter(
      employee => employee.hasMobile === true
    );
    // Set state equal new employees array
    this.setState({ employees });
  };


  render() {
    return (
      <Wrapper>
        <Title>User Directory</Title>
        <div>Use # to see Decending order</div>
        <div>
          Click Mobile hone to filter users who have a mobile phone.
        </div>
        <UserTable idSort={this.idSort} hasMobile={this.hasMobile}>
          {this.state.employees.map(employee => (
            <UserData
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              email={employee.email}
              deskPhone={employee.deskPhone}
              mobilePhone={employee.mobilePhone}
            />
          ))}
        </UserTable>
      </Wrapper>
    );
  }
}

export default App;

