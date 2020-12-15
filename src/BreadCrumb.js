import React from 'react';
import "./BreadCrumb.css";
import { Link } from 'react-router-dom';


function BreadCrumb(props) {
    return (
        <div className="bc__holder">
            <Link to ="/">Home/</Link>           
            <p>{props.pagename}</p>
            
        </div>
    )
}


export default BreadCrumb
