import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ProfilePage from "./pages/profile/profile.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      createUserProfileDocument(user);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser}=this.state
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/profilepage" element={<ProfilePage />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="signin/" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
