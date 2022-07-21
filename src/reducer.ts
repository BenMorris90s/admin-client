import StateInterface from "./interfaces/state";

const initialState: StateInterface = {
    bundles: ["first-bundle"]
}

export default function reducer(state = initialState, action: any) {
    console.info(action);
    return state;
}