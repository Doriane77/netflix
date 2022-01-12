import React from "react";
import data from "../data.json";

function Section(){
    console.log(data);
     return (
     <div className="section">

        {data.map((liste,index)=>{
            return  <div key={index} className="catergory" >
            <h2>{liste.category}</h2>
         <div className="image">
            {liste.images.map((image,indux)=>{
                return <img key={indux} src={image} alt="movie" />
            })}
        </div>
        </div>
        })}
        
    </div>);
    
       
    
     
};
export default Section;