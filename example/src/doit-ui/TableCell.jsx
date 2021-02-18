import React, {PureComponent } from 'react';
import PropTypes from 'prop-types';
import {withStyles, css, withStylesPropTypes } from './withStyles';

class TableCell extends PureComponent {
	render() {
		const {align, baseline, styles, children, isHeader} = this.props;
		const Tag = isHeader ? 'th' : 'td';
		return (
			<Tag
				{...css(
					styles.cell,
					isHeader && styles.header,
					!isHeader && baseline && styles.baseline,
					align === 'center' && styles.alignCenter,
					align === 'right' && styles.alignRight,
				)}
			>
				{children}
			</Tag>
		);
	}
}

TableCell.propTypes = {
	...withStylesPropTypes,
	align: PropTypes.oneOf(['left', 'center', 'right']),
	baseline: PropTypes.bool,
	children: PropTypes.node,
	isHeader: PropTypes.bool,
};

TableCell.defaultProps = {
	baseline: true,
	isHeader: false,
};

export default withStyles(({color, unit}) => ({
	...
}))(TableCell);