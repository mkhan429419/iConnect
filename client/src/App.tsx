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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={
            <>
              <SignedOut>
                <Register />
              </SignedOut>
              <SignedIn>
                <Home />
              </SignedIn>
            </>
          }
        />
        <Route
          path="/home"
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
                <Home />
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
