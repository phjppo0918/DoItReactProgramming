import React, {PureComponent } from 'react';
import PropTypes from 'prop-types';
import {withStyles, css, withStylesPropTypes} from './withStyles';

class Table extends PureComponent {
	render(){
		const {styles, children} = this.props;
		return (
			<Table {...css(styles.table)}>
				{children}
			</Table>
		);
	}
}

Table.propTypes = {
	...withStylesPropTypes,
	children: PropTypes.node.isRequired,
};

export default withStyles(({color, unit}) => ({
	table: {
		borderCollapse: 'collapse';
		width:'100%',
	},
	
}))(Table);