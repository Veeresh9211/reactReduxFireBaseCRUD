import React,{useEffect} from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from "react-redux";
import BusDetails from '../busDetails/busDetails';
import {GetBusData,DeleteBusData} from '../../store/actions/busAction';
import DataLoader from '../dataLoadeNotification/dataLoader';
import Notification from '../dataLoadeNotification/notification';

function ListBus(props){
    const dispatch = useDispatch();
    const deleteStatusRef = useSelector(state => state.busR.deleteStatus);
    const buses = useSelector(state => state.busR.buses);
    const loaderVal = useSelector(state => state.busR.loader);

    useEffect(()=>{
        dispatch(GetBusData())
    },[0])
   
    let dataLoader = loaderVal ? <DataLoader/> : "";
    let busDetail = buses.length > 0 && buses.map((bus)=>{
        return <BusDetails bus={bus} key={bus.id} deleteHander={(d)=>dispatch(DeleteBusData(d))}/>
    })
    
    return(
        <div className="container">
            <Notification data="Record Successfully Deleted"/>
            <div className="row postHeader">
                <div className="col-md-2">
                    Name
                </div>
                <div className="col-md-2">
                    Type
                </div>
                <div className="col-md-3">
                    Seats
                </div>
                <div className="col-md-2">
                    Company
                </div>
                <div className="col-md-2">
                    Year
                </div>
                <div className="col-md-1">
                    Actions
                </div>
            </div>
            {dataLoader}
            {busDetail}
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
                        Record Successfully Deleted.
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
//     return{
//         buses: state.busR.buses,
//         loaderVal: state.busR.loader
//     }
// }
export default ListBus;