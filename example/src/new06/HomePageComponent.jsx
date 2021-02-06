import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import ButtonWithContext from './ButtonWithContext'; //1

function RowBComponent {
	return <Button>버튼</Button>;
}

function RowCComponent() {
	return <ButtonWithContext>버튼</ButtonWithContext>; //2
}

function TableComponent() {
	return (
		<table>
			<RowBComponent />
			<RowCComponent />
		</table>
	);
}

class HomePageComponent extends PureComponent {
	constructor(props) {
		super(props);
		
		this.state = {loading:false};
		this.setLoading = this.setLoading.bind(this); //3
		this.toggleLoading = this.toggleLoading.bind(this);
	}
	
	getChildContext() { //4
		return {
			loading: this.state.loading,
			setLoading: this.setLoading,
		};
	}
	
	setLoading(loading) {
		this.setState({loading});
	}
	
	toggleLoading() {
		this.setState(({loading })) => ({ loading: !loading });
	}
	
	render() {
		return (
			<div>
				<TableComponent />
				<Button onPress={this.toggleLoading}>상태 변경</Button>
			</div>
		); //5
	}
}

HomePageComponent.childContextTypes  = { //6
	loading:PropTypes.bool,
	setLoading: PropTypes.func,
};

export default HomePageComponent;