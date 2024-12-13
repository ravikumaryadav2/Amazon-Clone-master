import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ }, dispatch] = useStateValue();
  console.log("SD")
  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      // console.log('The user is >>>', authUser);

      if (authUser) {
        //the user was just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET-USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM- Block Element and Modifier
    <Router>
      <div className="App">


        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="/payment" element={[<Header />, <Payment />]} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
