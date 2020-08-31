import React, { useCallback, useContext, useEffect } from "react";
import braggingwhiteImg from "./braggingwhite.svg";
import { AuthContext } from "../../Auth";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import "./style.scss";


// export class Login extends React.Component {
const Login = ({history},props)=>{
  // constructor(props) {
  //   super(props);
  // }
  // 
  const { currentUser } = useContext(AuthContext);
  // useEffect(()=>{
  //   app.auth().signOut();
  // })
  const handleLogin = useCallback(
    async event => {
      console.log("hello");
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value).then((user)=>{
              console.log(user);
          });
        // history.push("/");
      } catch (error) {
        alert(error);
      }
    }
  );
  if (currentUser) {
    console.log(currentUser)
    return <Redirect to="/myhome" />;
  }

 return(
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Welcome</div>
        <div className="content">
          <div className="image">
            <img src={braggingwhiteImg} alt=""/>
          </div>
          <form onSubmit ={handleLogin}>
            <div className="form" >
              <div className="form-group">
                <label className="col-lg-2 col-md-3 col-sm-4 col-xs-4 control-label" htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label className="col-lg-2 col-md-3 col-sm-4 col-xs-4 control-label" htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
            <div className="footer">
            <button type="button" className="login-button" id="login-button" className="btn" type = "submit">
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }

export default Login;