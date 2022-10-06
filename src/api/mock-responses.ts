import {GetBundlesResponse} from "../interfaces/GetBundlesResponse";

export const mockGetBundles: GetBundlesResponse = {
    Bundles: [
        {
            CaseId: "AAAA",
            CustomerName: "Customer One",
            Submitted: true,
            SubmittedDate: "05/10/2022"
        },
        {
            CaseId: "BBBB",
            CustomerName: "Customer Two",
            Submitted: false,
            SubmittedDate: null
        }
    ]
};