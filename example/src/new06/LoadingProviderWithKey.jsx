import React from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_KEY = 'defaultLoadingKey'; //1
export const contextPropTypes = { //2
	loading: PropTypes.bool,
	setLoading: PropTypes.func,
};

export default (contextKey = DEFAULT_KEY) => { //3
	class LoadingProvider extends React.Component {
		constructor(props) {
			super(props);
			
			this.state = {loading: false};
			this.setLoading = this.setLoading.bind(this);
		}
		
		getChildContext() {
			return {
				[contextKey]: { //4
					loading:this.state.loading,
					setLoading:this.setLoading,
				},
			};
		}
		
		setLoading(loading) {
			this.setState({loading});
		}
		
		render() {
			return this.props.children;
		}
	}
	
	LoadingProvider.childContextTypes = {
		[contextKey]: contextPropTypes,
	};
	
	return LoadingProvider;
};