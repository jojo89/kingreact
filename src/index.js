import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import {BrowserRouter} from 'react-router-dom'
import Game from './Game';
import {StripeProvider} from 'react-stripe-elements';

ReactDOM.render( 
<BrowserRouter>
    <StripeProvider apiKey="pk_live_ElGHyjAz7MX8NLSfnJ6bnwq8">
     	<Game/> 
    </StripeProvider>

	  </BrowserRouter>
,
    document.getElementById('root')
);


