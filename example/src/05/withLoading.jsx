import React from 'react';

export default function withLoading(WrappedComponent) {
	const { displayName, name: componentName} = WrappedComponent;
	const wrappedComponentName = displayName || componentName;
	
	function WithLoading({isLoading, ...otherProps}) {
		if(isLoading) {
			return 'lodding~';
		}
		return (
			<WrappedComponent {...otherProps}/>
		);
	}
	WithLoading.displayName = `withLoading(${wrappedComponentName})`;
	return WithLoading;
}