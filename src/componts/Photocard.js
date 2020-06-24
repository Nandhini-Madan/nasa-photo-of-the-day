import React from "react";
const Photocard=({date1 ,url})=>{
    return(
 <div>
<p>{date1}</p>
<img src={url}></img>
</div>
    );
};



export default Photocard;