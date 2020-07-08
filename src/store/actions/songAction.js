import axios from 'axios';
import firebase from '../../config/config';
const dbRef = firebase.firestore();
export const GetSongData =()=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        dbRef.collection("songs").get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({...doc.data(),id: doc.id}));
            dispatch({type: 'GET_SONG_DATA',payload: data});
        });
    }
}

export const SaveSongData =(data)=>{
    let songRecord =  {
        "name": data.name,
        "filmName": data.filmName,
        "singer": data.singer,
        "year":data.year
     }
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        debugger
        dbRef.collection("songs").doc().set(songRecord)
        .then(function() {
            dispatch({type: 'SAVE_SONG_DATA',payload: "SUCCESS"});
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
}

export const UpdateSongData =(data)=>{
    let record =  {
        "name": data.name,
        "salary": data.content,
        "age": data.author
     }
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        axios.put(`http://dummy.restapiexample.com/api/v1/update/${data.id}`,record)
        .then(function (response) {
            debugger;
           dispatch({type: 'UPDATE_SONG_DATA',payload: response.status});
        })
    }
}