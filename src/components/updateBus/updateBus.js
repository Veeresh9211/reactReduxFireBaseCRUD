import React from 'react';
// import {SaveSongData} from '../../store/actions/songAction';
import DataLoader from '../dataLoadeNotification/dataLoader';
import {connect} from 'react-redux';
import { UpdateBusData } from '../../store/actions/busAction';
import $ from 'jquery';


class UpdateBus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.location.state.id,
            name: this.props.location.state.name,
            Type: this.props.location.state.Type,
            Seats: this.props.location.state.Seats,
            Company: this.props.location.state.Company,
            year: this.props.location.state.year

        }
    }
    handleChange=(e)=>{
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    updateSong(e){
        e.preventDefault();
        this.props.updateBusRef(this.state)

    }

    render(){
        let dataLoader = this.props.loaderVal ? <DataLoader/> : "";
        if(this.props.updateStatusRef == 200){
            $("#updateSuccessModal").modal();
        }
        return(

            <div className="container formAlignment">
                <h3>Update Record</h3>
                {/* {this.props.updateStatusRef} */}
                <form onSubmit={this.updateSong.bind(this)}>
                <div className="form-group">
                        <label >Id</label>
                        <input type="text" value={this.state.id} className="form-control" id="id" onChange={this.handleChange} readOnly/>
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" value={this.state.name} className="form-control" id="name" onChange={this.handleChange} placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <input value={this.state.Type} type="text" className="form-control" id="Type" onChange={this.handleChange} placeholder="Enter Type"/>
                    </div>
                    <div className="form-group">
                        <label>Seats</label>
                        <input value={this.state.Seats} type="number" className="form-control" id="Seats" onChange={this.handleChange} placeholder="Enter Seats"/>
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <input value={this.state.Company} type="text" className="form-control" id="Company" onChange={this.handleChange} placeholder="Enter Company"/>
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <textarea value={this.state.year} className="form-control" id="year" onChange={this.handleChange} placeholder="Enter Year"/>
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
        loaderVal: state.busR.loader
    }
}


const dispatcActionToProps = (dispatch) =>{
    return{
        updateBusRef: (record)=> dispatch(UpdateBusData(record))
    }
}
export default connect(mapStateToProps,dispatcActionToProps)(UpdateBus);