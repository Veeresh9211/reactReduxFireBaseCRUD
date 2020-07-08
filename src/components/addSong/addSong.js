import React from 'react';
import {SaveSongData} from '../../store/actions/songAction';
import DataLoader from '../loader/dataLoader';
import {connect} from 'react-redux';
import $ from 'jquery';

class AddSong extends React.Component{
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
        let dataLoader = this.props.loaderVal ? <DataLoader/> : "";
        if(this.props.newStatusRef == 'SUCCESS'){
            $("#newSuccessModal").modal();
        }
        return(
            <div className="container formAlignment">
                <h3>New Song</h3>
                <form onSubmit={this.saveSong.bind(this)}>
                    <div className="form-group">
                        <label >Song Name</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} placeholder="Enter Song Name"/>
                    </div>
                    <div className="form-group">
                        <label>Film Name</label>
                        <textarea className="form-control" id="filmName" onChange={this.handleChange} placeholder="Enter Film Name"/>
                    </div>
                    <div className="form-group">
                        <label>Singer</label>
                        <input type="text" className="form-control" id="singer" onChange={this.handleChange} placeholder="Enter Singer"/>
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="number" className="form-control" id="year" onChange={this.handleChange} placeholder="Enter Year"/>
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
}
const mapStateToProps = (state)=>{
    debugger
    return{
        newStatusRef: state.songR.newStatus,
        loaderVal: state.songR.loader
    }
}

const dispatchActionToProps = (dispatch)=>{
    return{
        saveDataRef: (record)=> dispatch(SaveSongData(record))
    }
}
export default connect(mapStateToProps,dispatchActionToProps)(AddSong);