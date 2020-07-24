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
    debugger
    let busRecord =  {
        "name": data.name,
        "Type": data.Type,
        "Seats": data.Seats,
        "Company": data.Company,
        "year": data.year
     }
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        debugger
        dbRef.collection("Buses").doc().set(busRecord)
        .then(function() {
            debugger
            dispatch({type: 'SAVE_BUS_DATA',payload: "SUCCESS"});
        })
        .catch(function(error) {
            debugger
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
            debugger;
           dispatch({type: 'UPDATE_BUS_DATA',payload: response.status});
        })
    }
}

export const DeleteBusData =(data)=>{
   debugger
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'})
        // axios.put(`http://dummy.restapiexample.com/api/v1/update/${data.id}`,record)
        // .then(function (response) {
        //     debugger;
        //    dispatch({type: 'UPDATE_BUS_DATA',payload: response.status});
        // })
    }
}