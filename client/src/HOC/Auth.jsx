import React from "react";
import {withCookies} from "react-cookie";

const Auth = ({Component, cookies}) => {
 
  return class Authenticated extends React.Component {
    render() {
      console.log(cookies)
      if(true){
        
      }
      const notLoggedIn = (
        <div>
          <h1>To see the jokes, please log in or register.</h1>
        </div>
      );

      return <Component {...this.props} />
    }
  };
}

export default withCookies(Auth);