import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/Login/PrivateRoute';
import Review from './Components/Review/Review';
import Book from './Components/Book/Book';
import BookingList from './Components/BookingList/BookingList';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import Dashboard from './Components/Dashboard/Dashboard';
import ManageService from './Components/ManageService/ManageService';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/addService">
              <AddService />
            </Route>
            <Route path="/book/:name">
              <Book />
            </Route>
            <Route path="/bookingList">
              <BookingList/>
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/manageService">
              <ManageService />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
