import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import BusDetails from '../busDetails/busDetails';
import {GetBusData} from '../../store/actions/busAction';
import DataLoader from '../loader/dataLoader';
function ListBus(props){
   
    useEffect(()=>{
        props.GetBusData()
    },[0])
    debugger
    let dataLoader = props.loaderVal ? <DataLoader/> : "";
    let {buses} =props;
    let busDetail = buses.length > 0 && buses.map((bus)=>{
        return <BusDetails bus={bus} key={bus.id}/>
    })
    return(
        <div className="container">
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
        </div>
    )
      
}
const mapStateToProps = (state)=>{
    debugger
    return{
        buses: state.busR.buses,
        loaderVal: state.busR.loader
    }
}
export default connect(mapStateToProps,{GetBusData})(ListBus);