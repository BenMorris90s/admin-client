import React, {useEffect, useState} from "react";
import {getExistingBundles} from "../api/bundles";
import {TableBundleData} from "../interfaces/TableBundleData";

function BundleTable() {
    const [bundles, setBundles] = useState<TableBundleData[] | []>([])

    useEffect(() => {
        setBundles(
            getExistingBundles()
        )
    }, [])

    return <div className="overflow-x-auto w-full relative">
        <table className="w-full text-sm text-left text-slate-50 dark:text-gray-400 odd:bg-white even:bg-slate-500">
            <thead className="text-xs text-slate-50 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Case ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Customer Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Submitted
                </th>
                <th scope="col" className="py-3 px-6">
                    Submitted Date
                </th>
            </tr>
            </thead>
            <tbody>
                {
                    bundles.length > 0 ?
                        bundles.map((bundle: TableBundleData) => {
                            return (
                                <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-slate-50 whitespace-nowrap dark:text-white">
                                        {bundle.CaseId}
                                    </th>
                                    <td className="py-4 px-6">
                                        {bundle.CustomerName}
                                    </td>
                                    <td className="py-4 px-6">
                                        {bundle.Submitted ? "Yes" : "No"}
                                    </td>
                                    <td className="py-4 px-6">
                                        {bundle.SubmittedDate ?? "-"}
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <></>
                }
            </tbody>
        </table>
    </div>
}

export default BundleTable
