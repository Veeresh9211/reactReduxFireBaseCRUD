import React from 'react';
import {Link} from 'react-router-dom';

const SongDetails =(props)=>{
    return(
        <div className=" row postDataList">
            <div className="col-md-2">
                {props.song.id}
            </div>
            <div className="col-md-2">
                {props.song.name}
            </div>
            <div className="col-md-3">
                {props.song.filmName}
            </div>
            <div className="col-md-2">
                {props.song.singer}
            </div>
            <div className="col-md-2">
                {props.song.year}
            </div>
            <div className="col-md-1">
                <button>Delete</button>
                
                <Link to={{pathname: `/updateSong/${props.song.id}`,state: props.song}} className="nav-link">Update Song</Link>
            </div>
            <hr/>
        </div>
    )
}

export default SongDetails;