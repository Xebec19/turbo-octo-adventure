import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../../context/auth";

export default function Root() {
  const [authState, setAuthState] = useState(false);
  return (
    <>
      <AuthContext value={(authState, setAuthState)}>
        <NavBar />
        <Outlet />
      </AuthContext>
    </>
  );
}
