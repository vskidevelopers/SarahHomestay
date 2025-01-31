import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

function UserUi() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />

      <Toaster />
    </div>
  );
}

export default UserUi;
