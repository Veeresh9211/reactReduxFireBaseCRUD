const initialState={
    posts: [],
    newRecord: {},
    loader: false
}
const songReducer =(state=initialState, action)=>{
    debugger
    switch(action.type){
        case 'GET_POST_DATA':
            return {
                ...state,
                posts: action.payload,
                loader: false
            }
        break;
        case 'SAVE_SONG_DATA':
            return {
                ...state,
                newRecord: action.payload,
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