import React from 'react';
import Proptypes from 'prop-types';

export default WrappedComponent => {
	const {displayName, name: componentName} = WrappedComponent;
	const wrappedComponentName = displayName || componentName;
	
	function WithLoadingContext(props, context) {
		const {loading, setLoading} = context;
		
		return (
			<WrappedComponent {...props} loading={loading} setLoading={setLoading}/>
		); //1
	};
	WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
	WithLoadingContext.contextTypes = { //2
		loading: Proptypes.bool,
		setLoading: PropTypes.func,
	};
	return WithLoadingContext;
};