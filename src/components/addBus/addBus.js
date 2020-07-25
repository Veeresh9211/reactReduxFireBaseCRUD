import React from 'react';
import {SaveBusData} from '../../store/actions/busAction';
import DataLoader from '../dataLoadeNotification/dataLoader';
import {connect} from 'react-redux';
import Notification from '../dataLoadeNotification/notification';
class AddBus extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleChange=(e)=>{
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    saveSong(e){
        e.preventDefault();
        this.props.saveDataRef(this.state)

    }
    render(){
        
        let notification = this.props.newStatusRef == 'SUCCESS' ? <Notification data="Record Successfully Created"/> : ""
        let dataLoader = this.props.loaderVal ? <DataLoader/> : "";

        return(
            <div className="container formAlignment">
                <h3>New Bus</h3>
                {notification}
                <form onSubmit={this.saveSong.bind(this)}>
                    <div className="form-group">
                        <label >Bus Name</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} placeholder="Enter Bus Name"/>
                    </div>
                    <div className="form-group">
                        <label>Bus Type</label>
                        <input type="text" className="form-control" id="Type" onChange={this.handleChange} placeholder="Enter Bus Type"/>
                    </div>
                    <div className="form-group">
                        <label>Seats</label>
                        <input type="number" className="form-control" id="Seats" onChange={this.handleChange} placeholder="Enter Seats"/>
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <input type="text" className="form-control" id="Company" onChange={this.handleChange} placeholder="Enter Company"/>
                    </div>                  
                    <div className="form-group">
                        <label>Year</label>
                        <input type="number" className="form-control" id="year" onChange={this.handleChange} placeholder="Enter Year"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Record</button>
                </form>
                {dataLoader}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        newStatusRef: state.busR.newStatus,
        loaderVal: state.busR.loader
    }
}

const dispatchActionToProps = (dispatch)=>{
    return{
        saveDataRef: (record)=> dispatch(SaveBusData(record))
    }
}
export default connect(mapStateToProps,dispatchActionToProps)(AddBus);