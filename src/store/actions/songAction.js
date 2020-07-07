import axios from 'axios';
export const GetSongData =()=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(function (response) {
            debugger;
           dispatch({type: 'GET_POST_DATA',payload: response.data.data});
        })
    }
    return{
        type: 'GET_POST_DATA',
        
    }
}

export const SaveSongData =(data)=>{
    let record =  {
        "name": data.name,
        "salary": data.content,
        "age": data.author
     }
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        axios.post('http://dummy.restapiexample.com/api/v1/create',record)
        .then(function (response) {
            debugger;
           dispatch({type: 'SAVE_SONG_DATA',payload: response.data.data});
        })
    }
    return{
        type: 'GET_POST_DATA',
        
    }
}
// export default GetSongData;