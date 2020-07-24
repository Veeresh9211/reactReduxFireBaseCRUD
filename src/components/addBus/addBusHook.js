import React,{useState} from 'react';
import {SaveBusData} from '../../store/actions/busAction';
import { useDispatch, useSelector } from "react-redux";
import DataLoader from '../loader/dataLoader';
import {connect} from 'react-redux';
import $ from 'jquery';

function AddBus(props){
    const newStatusRef = useSelector(state => state.busR.newStatus);
    const loaderVal = useSelector(state => state.busR.loader);
    const dispatch = useDispatch();

    const [bus , setBus] = useState({name : "",Type : "",Seats: "",Company: "",year: ""})

    const handleInputChange = (e) =>{
        e.preventDefault();
        setBus({...bus,[e.currentTarget.id]:e.currentTarget.value});

    }

    const saveSong =()=>{
        debugger
        SaveBusData(bus);
    }

    let dataLoader = loaderVal ? <DataLoader/> : "";
    if(newStatusRef == 'SUCCESS'){
        $("#newSuccessModal").modal();
    }
    return(
        <div className="container formAlignment">
            <h3>New Bus</h3>
            <form onSubmit={saveSong}>
                <div className="form-group">
                    <label >Bus Name</label>
                    <input type="text" className="form-control" id="name" onChange={handleInputChange} placeholder="Enter Bus Name"/>
                </div>
                <div className="form-group">
                    <label>Bus Type</label>
                    <input type="text" className="form-control" id="Type" onChange={handleInputChange} placeholder="Enter Bus Type"/>
                </div>
                <div className="form-group">
                    <label>Seats</label>
                    <input type="number" className="form-control" id="Seats" onChange={handleInputChange}  placeholder="Enter Seats"/>
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input type="text" className="form-control" id="Company" onChange={handleInputChange} placeholder="Enter Company"/>
                </div>                  
                <div className="form-group">
                    <label>Year</label>
                    <input type="number" className="form-control" id="year" onChange={handleInputChange} placeholder="Enter Year"/>
                </div>
                <button type="submit" className="btn btn-primary">Save Record</button>
            </form>
            {dataLoader}

            <div className="modal fade" id="newSuccessModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Notification</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Record Successfully Created.
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// const mapStateToProps = (state)=>{
//     debugger
//     return{
//         newStatusRef: state.busR.newStatus,
//         loaderVal: state.busR.loader
//     }
// }

// const dispatchActionToProps = (dispatch)=>{
//     return{
//         saveDataRef: (record)=> dispatch(SaveBusData(record))
//     }
// }
export default AddBus;