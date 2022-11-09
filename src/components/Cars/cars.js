import React from 'react';
import './cars.css';

export default function Cars(props){
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            {/* <div className="card-content">
            <p>
            {props.children}
            </p>
            </div> */}
            
        </div>
    );
}