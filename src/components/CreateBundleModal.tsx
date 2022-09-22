import React from "react"
import {useAppDispatch} from "../hooks"
import {toggle} from "../reducers/createBundleSlice"
import {useTranslation, Trans} from 'react-i18next'


function CreateBundleModal() {
    const {t} = useTranslation();

    const dispatch = useAppDispatch()

    const handleNewBundle = () => {
        dispatch(toggle())
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">

                    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-2/3 h-full">
                        <div className="bg-white px-4 pt-500 pb-4 sm:p-6 sm:pb-4">
                            <div className="flex flex-col items-center">
                                <h1 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">{t("Create Bundle")}</h1>


                                <div className="flex justify-center items-center w-full">
                                    <label htmlFor="dropzone-file"
                                           className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><Trans><span
                                                className="font-semibold">Click to upload</span> or drag and drop</Trans></p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400"></p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden"/>
                                    </label>
                                </div>


                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex flex-col items-center">
                            <button
                                onClick={handleNewBundle}
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{t("Cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBundleModal
