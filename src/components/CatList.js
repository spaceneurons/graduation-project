import React from 'react';
import CatItem from './CatItem';

const CatList = (props) => {
    const renderedList = props.data.map((cat)=>{
        return <CatItem cat={cat} key={cat.id}/>
    })
    

        return(
            <div className="card-columns">
           
                
               {renderedList}
    
            
            </div>
        )
    
        
   
    
}

export default CatList;