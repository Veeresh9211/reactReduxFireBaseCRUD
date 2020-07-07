import React from 'react';
// import {SaveSongData} from '../../store/actions/songAction';
import DataLoader from '../loader/dataLoader';
import {connect} from 'react-redux';

class UpdateSong extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleChange=(e)=>{
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    updateSong(e){
        e.preventDefault();
        // this.props.saveDataRef(this.state)

    }
    render(){
        debugger
        let dataLoader = this.props.loaderVal ? <DataLoader/> : "";
        return(
            <div className="container formAlignment">
                <h3>Update Record</h3>
                <form onSubmit={this.updateSong.bind(this)}>
                <div className="form-group">
                        <label >Id</label>
                        <input type="text" value={this.props.match.params.id} className="form-control" id="id" onChange={this.handleChange} readOnly/>
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" value={this.props.location.state.employee_name} className="form-control" id="name" onChange={this.handleChange} placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea value={this.props.location.state.employee_salary} className="form-control" id="content" onChange={this.handleChange} placeholder="Enter Content"/>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input value={this.props.location.state.employee_age} type="text" className="form-control" id="author" onChange={this.handleChange} placeholder="Enter Author"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Record</button>
                </form>
                {dataLoader}
            </div>
        )
    }
}
// const mapStateToProps = (state)=>{
//     debugger
//     return{
//         newRecordRef: state.songR.newRecord,
//         loaderVal: state.songR.loader
//     }
// }

// const dispatchActionToProps = (dispatch)=>{
//     return{
//         saveDataRef: (record)=> dispatch(SaveSongData(record))
//     }
// }
export default UpdateSong;