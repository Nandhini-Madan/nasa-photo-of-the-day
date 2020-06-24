import React,{useState, useEffect} from "react";
import axios from "axios";
import Photocard from "./Photocard";

export default function Photolist(){
    const [Photos,SetPhotos]=useState([]);
    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res=>{
            console.log("Result of nasa",res);
            SetPhotos(res.data);
        })
       .catch(err=>{
           console.log("error occured",err);

       })
        
    },[]);

    return(

        <div>
          <Photocard key={Photos.id} date1={Photos.date} url={Photos.hdurl}/>
        </div>
    );

}
