const initialState={
    songs: [],
    newStatus: "",
    loader: false,
    updateStatus: ""
}
const songReducer =(state=initialState, action)=>{
    debugger
    switch(action.type){
        case 'GET_SONG_DATA':
            return {
                ...state,
                songs: action.payload,
                loader: false
            }
        break;
        case 'SAVE_SONG_DATA':
            return {
                ...state,
                newStatus: action.payload,
                loader: false
            }
        break;
        case 'UPDATE_SONG_DATA':
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

export default songReducer;