import React from 'react';
// import {SaveSongData} from '../../store/actions/songAction';
import DataLoader from '../loader/dataLoader';
import {connect} from 'react-redux';
import { UpdateSongData } from '../../store/actions/songAction';
import $ from 'jquery';


class UpdateSong extends React.Component{
    constructor(props){
        super(props);
        debugger
        this.state={
            id: this.props.location.state.id,
            name: this.props.location.state.employee_name,
            content: this.props.location.state.employee_salary,
            author: this.props.location.state.employee_age,

        }
    }
    handleChange=(e)=>{
        debugger
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    updateSong(e){
        debugger
        e.preventDefault();
        this.props.updateSongRef(this.state)

    }

    render(){
        let dataLoader = this.props.loaderVal ? <DataLoader/> : "";
        debugger
        if(this.props.updateStatusRef == 200){
            $("#updateSuccessModal").modal();
        }
        return(

            <div className="container formAlignment">
                <h3>Update Record</h3>
                {this.props.updateStatusRef}
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
                        <label>Content</label>
                        <textarea value={this.state.content} className="form-control" id="content" onChange={this.handleChange} placeholder="Enter Content"/>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input value={this.state.author} type="text" className="form-control" id="author" onChange={this.handleChange} placeholder="Enter Author"/>
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
    debugger
    return{
        updateStatusRef: state.songR.updateStatus,
        loaderVal: state.songR.loader
    }
}


const dispatcActionToProps = (dispatch) =>{
    return{
        updateSongRef: (record)=> dispatch(UpdateSongData(record))
    }
}
export default connect(mapStateToProps,dispatcActionToProps)(UpdateSong);