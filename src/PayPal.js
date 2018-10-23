import React from 'react';

class PayPal extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: []
    };
  }

    render() {
        return <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
		    <input type="hidden" name="cmd" value="_s-xclick" />
		    <table>
		        <tr>
		            <td><input type="hidden" name="on0" value="Sizes" />Sizes</td>
		        </tr>
		        <tr>
		            <td>
		              <select name="os0">
						   	<option value="Small">Small </option>
						   	<option value="Medium">Medium </option>
						   	<option value="Large">Large </option>
						   	<option value="X-Large">X-Large </option>
						   	<option value="XX-Large">XX-Large </option>
					  </select> 
		            </td>
		        </tr>
		    </table>
		    <input type="hidden" name="encrypted" value={this.props.payPalId} />
		    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
		    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
		</form>


    }
}

export default PayPal;

