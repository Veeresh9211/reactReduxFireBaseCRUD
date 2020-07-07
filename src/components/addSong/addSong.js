import React from 'react';
import {SaveSongData} from '../../store/actions/songAction';
import DataLoader from '../loader/dataLoader';
import {connect} from 'react-redux';

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
        return(
            <div className="container formAlignment">
                <h3>New Record</h3>
                <form onSubmit={this.saveSong.bind(this)}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea className="form-control" id="content" onChange={this.handleChange} placeholder="Enter Content"/>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" className="form-control" id="author" onChange={this.handleChange} placeholder="Enter Author"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Record</button>
                </form>
                {dataLoader}
                <div style={{marginTop:"3%"}} className="container">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Content</th>
                            <th scope="col">Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{this.props.newRecordRef.id}</th>
                            <td>{this.props.newRecordRef.name}</td>
                            <td>{this.props.newRecordRef.salary}</td>
                            <td>{this.props.newRecordRef.age}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    debugger
    return{
        newRecordRef: state.songR.newRecord,
        loaderVal: state.songR.loader
    }
}

const dispatchActionToProps = (dispatch)=>{
    return{
        saveDataRef: (record)=> dispatch(SaveSongData(record))
    }
}
export default connect(mapStateToProps,dispatchActionToProps)(AddSong);