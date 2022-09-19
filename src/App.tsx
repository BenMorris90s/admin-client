import React from "react"
import Sidebar from "./components/Sidebar"
import BundleTable from "./components/BundleTable"
import "./App.css"
import {useAppSelector} from "./hooks"
import CreateBundleModal from "./components/CreateBundleModal"
import {showCreateBundleModal} from "./reducers/createBundleSlice";


function App() {
  const showNewBundleModal = useAppSelector(showCreateBundleModal)
  console.info(showNewBundleModal)
  return <div className="flex">
    {showNewBundleModal ? <CreateBundleModal /> : <></>}
    <Sidebar />
    <BundleTable />
  </div>
}

export default App
