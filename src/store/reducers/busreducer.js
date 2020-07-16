const initialState={
    buses: [],
    newStatus: "",
    loader: false,
    updateStatus: ""
}
const busReducer =(state=initialState, action)=>{
    debugger
    switch(action.type){
        case 'GET_BUS_DATA':
            return {
                ...state,
                buses: action.payload,
                loader: false
            }
        break;
        case 'SAVE_BUS_DATA':
            return {
                ...state,
                newStatus: action.payload,
                loader: false
            }
        break;
        case 'UPDATE_BUS_DATA':
            return {
                ...state,
                updateStatus: action.payload,
                loader: false
            }
        break;
        case 'BEGIN_API':
            return {
                ...state,
                loader: true
            }
        break;
        default:
            return state;
    }
    
}

export default busReducer;