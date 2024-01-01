import React from "react";

function Avatar(e){
    return(
        <img className="circle-img"
        src= {e.img}
        alt="avatar_img"
      />
    )
}

export default Avatar;