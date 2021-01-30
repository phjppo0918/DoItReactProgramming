import React from 'react';

export default function withLoading(WrappedComponent) {
	const { displayName, name: componentName} = WrappedComponent;
	const wrappedComponentName = displayName || componentName;
	
	function WithLoading(props) {
		if(props.isLoading) {
			return 'lodding~';
		}
		return (
			<WrappedComponent {...props}/>
		);
	}
	WithLoading.displayName = `withLoading(${wrappedComponentName})`;
	return WithLoading;
}