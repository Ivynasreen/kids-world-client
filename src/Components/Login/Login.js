import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../images/google.png';
import school from '../../images/school.jpg';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      // console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
        }).catch(function (error) {
      });
  }
    return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="form-group mt-5">
            <button className="btn btn-danger text-center">Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img className="img-fluid" src={school} alt="" />
        </div>
        <div className="form-group mt-5">
            <button style={{display: 'block', margin:'auto'}} className="btn btn-danger text-center" onClick={handleGoogleSignIn}><img style = {{height: '30px', marginRight : '10px'}} src = {google}/>Google Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;