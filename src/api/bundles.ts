import {mockGetBundles} from "./mock-responses";
import {TableBundleData} from "../interfaces/TableBundleData";
import {FileUploadResult} from "../interfaces/FileUploadResult";

export function getExistingBundles(): TableBundleData[]  {
    console.info("Returning mock api data...")
    return mockGetBundles.Bundles
}

export function uploadFile(): FileUploadResult {
    return {
        statusCode: 200,
        success: true,
        data: {}
    }
}
