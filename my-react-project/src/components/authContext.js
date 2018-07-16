import React from "react";

const UserContext = React.createContext('user');

export function getUser(Component) {
  console.log('user context')
  return class Getuser extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {user =>
            <Component
              { ...this.props }
              auth = {user}
            />
          }
        </UserContext.Consumer>
      );
    }
  }
}

export default UserContext;
