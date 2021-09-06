import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import AppContext from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
	return (
		<AppContext.Consumer>
		  {
			(context) => {
			  return (

		<footer>
		<p>Copyright {getFullYear()} - {getFooterCopy()}</p>
		</footer>
		);
	}
  }
</AppContext.Consumer>
);
}



export default Footer;
