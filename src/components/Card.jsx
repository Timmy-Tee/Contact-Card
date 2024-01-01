import React from "react";  
import Avatar from "./Avatar";
import Paragraph from "./Paragraph";


function Card(e){
    return(
        <div className="card">
        <div className="top">
         <Paragraph 
                details={e.id}
            />
          <h2 className="name"> {e.name} </h2>

          

            <Avatar img={e.img} />

        </div>
        <div className="bottom">
          <Paragraph 
            details={e.email}/>

          <Paragraph 
           details={e.phone}/>
        </div>
      </div>
    )
}


export default Card