import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import ButtonWithContext from './ButtonWithContext';

function RowBComponent() {
	return <Button>button</Button>;
}

function RowCComponent() {
	return <ButtonWithContext>button</ButtonWithContext>;
}

function TableComponent() {
	return (
		<table>
			<RowCComponent />
			<RowCComponent />
		</table>
	);
}

class HomePageComponent extends PureComponent {
	constructor(props) {
		super(props);
		
		this.state = { loading: false };
		this.setLoading = this.setLoading.bind(this);
		this.toggleLoading = this.toggleLoading.bind(this);
	}
	
	getChildContext() {
		return {
			loading : this.state.loading,
			setLoading: this.setLoading,
		};
	}
	
	setLoading(loading) {
		this.setState({ loading });
	}
	
	toggleLoading(){
		this.setState(({loading}) => ({loading: !loading}));
	}
	
	render() {
		return (
		<div>
			<TableComponent />
			<Button onPress={this.togleLoading}>상태 변경</Button>
		</div>
		);
	}
}

HomePageComponent.childContextTypes = {
	loading : PropTypes.bool,
	setLoading : PropTypes.func,
};

export default HomePageComponent;
