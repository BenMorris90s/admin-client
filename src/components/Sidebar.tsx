import React from "react"
import {useAppDispatch} from "../hooks"
import {toggle} from "../reducers/createBundle"


function Sidebar() {
  const dispatch = useAppDispatch()

  const handleNewBundle = () => {
    dispatch(toggle())
  }

  return (
    <aside className="w-64 h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto h-screen py-4 px-3 bg-primary-grey dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <div
              onClick={handleNewBundle}
              className="flex items-center hover:cursor-pointer p-2 text-base font-normal text-white rounded-lg dark:text-white hover:border-primary-yellow border-transparent border-2 dark:hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-primary-yellow dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">New Bundle</span>
            </div>
          </li>
          <li>
            <a
              href="https://www.google.com"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:border-primary-yellow border-transparent border-2 dark:hover:bg-gray-700"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:border-primary-yellow border-transparent border-2 dark:hover:bg-gray-700"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
