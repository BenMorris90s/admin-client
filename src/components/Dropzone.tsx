import React, {ChangeEvent} from "react";
import {Trans} from 'react-i18next'
import {FileUploadResult} from "../interfaces/FileUploadResult";
import {uploadFile} from "../api/bundles";

function Dropzone() {

    const handleFileUpload = (_event: ChangeEvent) => {
        const result: FileUploadResult = uploadFile()

        if (result.success) {
            console.info("Success!")
            // TODO: show success feedback
        } else {
            console.error("Fail!")
            // TODO: show error feedback
        }
    }

    return (
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
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <Trans><span className="font-semibold">Click to upload</span> or drag and drop</Trans></p>
                    <p className="text-xs text-gray-500 dark:text-gray-400"></p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload}/>
            </label>
        </div>
    )
}

export default Dropzone
