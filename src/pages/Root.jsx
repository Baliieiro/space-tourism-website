import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import DinamicLayout from "./DinamicLayout";

export default function Root() {
  return (
    <DinamicLayout>
      <Header />
      <Outlet />
    </DinamicLayout>
  );
}
