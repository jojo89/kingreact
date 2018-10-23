import React from 'react';

class Headlined extends React.Component {
       render(){
	return ( 
		<header className="intro-header">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
		                <div className="site-heading">
		
		                    <a href="/" className="headliner"><h1>The Anecdotal</h1></a>
		                </div>
		            </div>
		        </div>
		    </div>
		</header>
  
    );
}
}

export default Headlined;
