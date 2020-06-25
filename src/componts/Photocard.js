import React from "react";
const Photocard=({date1 ,url,explaination,title})=>{
    return(
 <div>
            <h1>{title}</h1>
            <p>Date: {date1}</p>
            <img src={url} width='400px' height='400px'></img>
            <p>explaination: {explaination}</p>
            
</div>
    );
};



export default Photocard;