import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const App=()=>(
    <>
     <h1 className='heading_style'>LIST OF MARVEL MOVIES</h1>
        
        { Sdata.map((val,index)=>{
            console.log(index);
          return(
          <Card 
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
              wiki={val.wiki}
          />
          );
  
        })}       
    </>
);
export default App;