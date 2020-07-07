import React from 'react';
import {Link} from 'react-router-dom';

const SongDetails =(props)=>{
    return(
        <div className=" row postDataList">
            <div className="col-md-1">
                {props.song.id}
            </div>
            <div className="col-md-3">
                {props.song.employee_name}
            </div>
            <div className="col-md-3">
                {props.song.employee_salary}
            </div>
            <div className="col-md-3">
                {props.song.employee_age}
            </div>
            <div className="col-md-2">
                <button>Delete</button>
                
                <Link to={{pathname: `/updateSong/${props.song.id}`,state: props.song}} className="nav-link">Update Song</Link>
            </div>
            <hr/>
        </div>
    )
}

export default SongDetails;