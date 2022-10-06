import {mockGetBundles} from "./mock-responses";

export function getExistingBundles() {
    console.info("Returning mock api data...")
    return mockGetBundles.Bundles
}