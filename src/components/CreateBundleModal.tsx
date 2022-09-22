import React from "react"
import {useAppDispatch} from "../hooks"
import {toggle} from "../reducers/createBundleSlice"
import {useTranslation} from 'react-i18next'
import Dropzone from "./Dropzone";


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

                    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-5/6 h-full">
                        <div className="bg-white px-4 pt-500 pb-4 sm:p-6 sm:pb-4">
                            <div className="flex flex-col items-center">
                                <h1 className="text-lg leading-6 font-medium text-gray-900 mb-6" id="modal-title">{t("Create Bundle")}</h1>

                                <Dropzone/>

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
