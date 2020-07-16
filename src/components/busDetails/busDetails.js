import React from 'react';
import {Link} from 'react-router-dom';

const BusDetails =(props)=>{
    return(
        <div className=" row postDataList">
            <div className="col-md-2">
                {props.bus.name}
            </div>
            <div className="col-md-2">
                {props.bus.Type}
            </div>
            <div className="col-md-3">
                {props.bus.Seats}
            </div>
            <div className="col-md-2">
                {props.bus.Company}
            </div>
            <div className="col-md-2">
                {props.bus.year}
            </div>
            <div className="col-md-1">
                <button>Delete</button>
                
                <Link to={{pathname: `/updatebus/${props.bus.id}`,state: props.bus}} className="nav-link">Update bus</Link>
            </div>
            <hr/>
        </div>
    )
}

export default BusDetails;