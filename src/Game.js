import React from 'react';
import Tees from './Tees';
import OriginalPieces from './OriginalPieces';
import Prints from './Prints';
import About from './About';
import Product from "./Product";
import Headlined from './Headlined';
import {Route} from 'react-router-dom'
import Navi from './Navi';

class Game extends React.Component {
    render(){
    	return <div>
		<Headlined/>
		<Navi/>
		<Route exact path='/' component={About} />
		<Route exact path='/tees' component={Tees} />
		<Route path="/tees/:product" component={Product} />
		<Route path='/original' component={OriginalPieces} />
		<Route path='/prints' component={Prints} />
		</div>
    }
}

export default Game;
