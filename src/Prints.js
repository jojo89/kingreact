import React from 'react';

class Prints extends React.Component {


    render() {
        const data = require('../src/img/disaster-artist_printable_01.jpg');
		
		return <div>
		    <div className="container">
		        <div className="row">
		            <div className="post-preview">
		                <div className="center">
		                    <h3 className="post-subtitle">
		                        Prints
		                    </h3>
		                    <img src={data} alt="" height="500"></img>
		                </div>
		            </div>

		        </div>
		    </div>
		</div>

    }
}

export default Prints;


