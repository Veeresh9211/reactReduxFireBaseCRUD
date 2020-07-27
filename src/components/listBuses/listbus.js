import React,{Component} from 'react';
import $ from 'jquery';
import { connect } from "react-redux";
import BusDetails from '../busDetails/busDetails';
import {GetBusData,DeleteBusData} from '../../store/actions/busAction';
import DataLoader from '../dataLoadeNotification/dataLoader';
import Notification from '../dataLoadeNotification/notification';

class ListBus extends Component{
    componentDidMount(){
        this.props.getBusesData();
    }
   
    render(){
        let dataLoader = this.props.loaderVal ? <DataLoader/> : "";
        let busDetail = this.props.buses.length > 0 && this.props.buses.map((bus)=>{
            return <BusDetails bus={bus} key={bus.id} deleteHander={()=>this.props.deleteBusData(bus.id)}/>
        })
        return(
            <div className="container">
                <Notification data="Record Successfully Deleted"/>
                <h3>Bus List</h3>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Seats</th>
                            <th scope="col">Company</th>
                            <th scope="col">Year</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {busDetail}
                        </tbody>
                    </table>
                </div>
                {dataLoader}
            </div>
        )
    }
  
    
      
}
const mapStateToProps = (state)=>{
    return{
        buses: state.busR.buses,
        loaderVal: state.busR.loader
    }
}

const dispatchActionToProps = (dispatch)=>{
    return{
        getBusesData: ()=>dispatch(GetBusData()),
        deleteBusData: (id)=>dispatch(DeleteBusData(id))
    }
}
export default connect(mapStateToProps, dispatchActionToProps)(ListBus);