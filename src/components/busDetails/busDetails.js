import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
const BusDetails =(props)=>{
    return(
        <React.Fragment>
            <tr>            
                <th scope="row">{props.bus.id}</th>
                <td>{props.bus.name}</td>
                <td>{props.bus.Type}</td>
                <td>{props.bus.Seats}</td>
                <td>{props.bus.Company}</td>
                <td>{props.bus.year}</td>
                <td>
                    <button onClick={()=>props.deleteHander(props.bus.id)} className="btn-block btn-sm btn btn-outline-danger">Delete</button>
                    <Link className="btn-block btn btn-outline-warning btn-sm" to={{pathname: `/updatebus/${props.bus.id}`,state: props.bus}}>Update</Link>
                </td>
            </tr>

        </React.Fragment>
    )
}

export default BusDetails;