import React from "react";
import Sidebar from "./components/Sidebar";
import BundleTable from "./components/BundleTable";
import "./App.css";

//TODO: Configure redux store
function App() {
  return <div className="flex">
    {Sidebar()}
    {BundleTable()}
  </div>;
}

export default App;
