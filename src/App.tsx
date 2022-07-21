import React from "react";
import Sidebar from "./components/Sidebar";
import BundleTable from "./components/BundleTable";
import "./App.css";

function App() {
  return <div className="flex">
    {Sidebar()}
    {BundleTable()}
  </div>;
}

export default App;
