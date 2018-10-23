import React from 'react';

class OriginalPieces extends React.Component {
  
	
	render(){
		
		  const data = require('../src/img/sexy-joe-painting.jpg');
		  
return <div>
   		<div className="container">
       <div className="row">
               <div className="post-preview">
                   <div className="center">
	
		  
                       <h3 className="post-subtitle">
                          
Original Pieces

               </h3>

                       <img src={data} alt="" height="500"></img>

                   </div>
               </div>

           </div>
       </div>
		</div>

    	
    }
}

export default OriginalPieces;


