import axios from 'axios';
import firebase from '../../config/config';
const dbRef = firebase.firestore();
export const GetBusData =()=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        dbRef.collection("Buses").get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({...doc.data(),id: doc.id}));
            dispatch({type: 'GET_BUS_DATA',payload: data});
        });
    }
}

export const SaveBusData =(data)=>{
    let busRecord =  {
        "name": data.name,
        "Type": data.Type,
        "Seats": data.Seats,
        "Company": data.Company,
        "year": data.year
     }
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        dbRef.collection("Buses").doc().set(busRecord)
        .then(function() {
            dispatch({type: 'SAVE_BUS_DATA',payload: "SUCCESS"});
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
}

export const UpdateBusData =(data)=>{
    let record =  {
       
     }
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        axios.put(`http://dummy.restapiexample.com/api/v1/update/${data.id}`,record)
        .then(function (response) {
           dispatch({type: 'UPDATE_BUS_DATA',payload: response.status});
        })
    }
}

export const DeleteBusData =(data)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        dbRef.collection("Buses").doc(data).delete().then(function(response) {
            dbRef.collection("Buses").get().then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => ({...doc.data(),id: doc.id}));
                dispatch({type:'DELETE_BUS_DATA', payload:'DELETE_SUCCESS'})
                dispatch({type: 'GET_BUS_DATA',payload: data});
            });
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}