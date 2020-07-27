import React,{useState, useEffect, Component} from 'react';
// import {SaveSongData} from '../../store/actions/songAction';
import DataLoader from '../dataLoadeNotification/dataLoader';
import {connect, useSelector, useDispatch} from 'react-redux';
import { UpdateBusData, GetSingleBusData } from '../../store/actions/busAction';
import $ from 'jquery';
import Notification from '../dataLoadeNotification/notification';

class UpdateBus extends Component{

    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount(dispatch){
        this.props.getSingleBusData(this.props.location.state.id).then((res)=>{
            this.setState({...res})
        })
    }
    handleChange=(e)=>{
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    updateSong=(e)=>{
        e.preventDefault();
        this.props.updateBusRef(this.props.location.state.id,this.state);
    }
    render(){
        var dataLoader = this.props.loaderVal ? <DataLoader/> : "";
        if(this.props.updateStatusRef == 200){
            $("#updateSuccessModal").modal();
        }
        return(

            <div className="container formAlignment">
                <h3>Update Record</h3>
                <Notification data="Record Successfully Updated"/>
                <form onSubmit={this.updateSong}>
                    <div className="form-group">
                            <label >Id</label>
                            <input type="text" value={this.props.location.state.id || ""} className="form-control" id="id" onChange={this.handleChange} readOnly/>
                        </div>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" value={this.state.name || ""} className="form-control" id="name" onChange={this.handleChange} placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label>Type</label>
                            <input type="text" value={this.state.Type || ""} className="form-control" id="Type" onChange={this.handleChange} placeholder="Enter Type"/>
                        </div>
                        <div className="form-group">
                            <label>Seats</label>
                            <input  type="number" value={this.state.Seats || ""} className="form-control" id="Seats" onChange={this.handleChange} placeholder="Enter Seats"/>
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input  type="text" value={this.state.Company || ""} className="form-control" id="Company" onChange={this.handleChange} placeholder="Enter Company"/>
                        </div>
                        <div className="form-group">
                            <label>Year</label>
                            <textarea  value={this.state.year || ""} className="form-control" id="year" onChange={this.handleChange} placeholder="Enter Year"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update Record</button>
                    </form>
                
                {dataLoader}

                <div className="modal fade" id="updateSuccessModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Notification</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Record Successfully Update.
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
   
}
const mapStateToProps = (state)=>{
    return{
        updateStatusRef: state.busR.updateStatus,
        loaderVal: state.busR.loader,
        singleBusData: state.busR.singleBusData
    }
}


const dispatcActionToProps = (dispatch) =>{
    return{
        updateBusRef: (id,record)=> dispatch(UpdateBusData(id,record)),
        getSingleBusData: (id) => dispatch(GetSingleBusData(id))
    }
}
export default connect(mapStateToProps,dispatcActionToProps)(UpdateBus);