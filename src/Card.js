import React from 'react'

function Cardlist(props) {
    return ( 
        <>
         <div className="card w-100" >
        <div class="card-header bg-primary text-white">
        <strong>{props.name}</strong>
            </div>
            <img src={props.img} class="card-img-top" style={{width:"100%",height:150}} alt={props.img}/>
            <div className="card-body">
            <h5  className="card-title">{props.app}</h5>
         
            <p className="card-text">{props.desc}</p>
            
        </div>
    </div>
    </>
    )
}

export default Cardlist;
