import React from 'react';

class Navi extends React.Component {
       render(){
	return ( 
			<ul className="page-list tabs">
			  <li className="active"><a href="/tees" className="#tab1">T-Shirts</a></li>
			  <li><a href="/original" className="#tab3">Original Pieces</a></li>
			  <li><a href="/prints" className="#tab4">Prints</a></li>
			</ul>
    );
}
}


export default Navi;
