import React from "react"
import Sidebar from "./components/Sidebar"
import BundleTable from "./components/BundleTable"
import "./App.css"
import {useAppSelector} from "./hooks"
import CreateBundleModal from "./components/CreateBundleModal"
import {showCreateBundleModal} from "./reducers/createBundle"


function App() {
  const showNewBundleModal = useAppSelector(showCreateBundleModal)

  return <div className="flex">
    {showNewBundleModal ? <CreateBundleModal /> : <></>}
    <Sidebar />
    <BundleTable />
  </div>
}

export default App
