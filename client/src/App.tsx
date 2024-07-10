import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";
import Register from "./pages/Register";
import Home from "pages/Home";
import Login from "pages/Login";
import Main from "pages/Main";
import Search from "pages/Search";
import Profile from "pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
          path="/profile"
          element={
            <>
              <SignedOut>
                <Register />
              </SignedOut>
              <SignedIn>
                <Profile />
              </SignedIn>
            </>
          }
        />
      <Route
          path="/search"
          element={
            <>
              <SignedOut>
                <Register />
              </SignedOut>
              <SignedIn>
                <Search />
              </SignedIn>
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <SignedOut>
                <Register />
              </SignedOut>
              <SignedIn>
                <Main />
              </SignedIn>
            </>
          }
        />
        <Route
          path="/chat"
          element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <Login />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Main />
              </SignedIn>
              <SignedOut>
                <Login />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
