const initialState = {}

export default function reducer(state = initialState, action: any) {
    console.info(action);
    return state;
}