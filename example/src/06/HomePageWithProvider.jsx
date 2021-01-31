import React, {PureComponent} from 'react';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';
import Button from '../04/Button';

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
	
	render() {
		return (
		<div>
			<TableComponent />
			<Button onPress={this.togleLoading}>상태 변경</Button>
		</div>
		);
	}
}
