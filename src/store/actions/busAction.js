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


export const GetSingleBusData =(id)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        return dbRef.collection("Buses").doc(id).get().then((querySnapshot) => {
            const data = querySnapshot.data()
            dispatch({type: 'GET_SINGLE_BUS_DATA',payload: data});
            return Promise.resolve(data)
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
            dispatch({type: 'SHOW_NOTIFICATION',payload: true});
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
}

export const UpdateBusData =(id,data)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        dbRef.collection("Buses").doc(id).update({
            name: data.name,
            Type: data.Type,
            Seats: data.Seats,
            Company: data.Company,
            year: data.year
        }).then(function() {
            dispatch({type: 'UPDATE_BUS_DATA',payload: "SUCCESS"});
            dispatch({type: 'SHOW_NOTIFICATION',payload: true});
        })
    }
}

export const DeleteBusData =(data)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        dbRef.collection("Buses").doc(data).delete().then(function(response) {
            dbRef.collection("Buses").get().then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => ({...doc.data(),id: doc.id}));
                dispatch({type: 'SHOW_NOTIFICATION',payload: true});
                dispatch({type: 'GET_BUS_DATA',payload: data});
            });
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}