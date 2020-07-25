import React,{useState} from 'react';
import {Toast} from 'react-bootstrap';

function Notification(props){
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    return(
        <Toast style={{position: "fixed",left: "48%",top: "45%",transform: "translate(-50%, -50%)",zIndex: "999",width: "21%","backdrop-filter": "none"}} show={showA} onClose={toggleShowA}>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>{props.data}</Toast.Body>
        </Toast>
    )
}

export default Notification;