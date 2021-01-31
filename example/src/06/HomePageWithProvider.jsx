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
			<RowBComponent />
			<RowCComponent />
		</table>
	);
}

class HomePageComponent extends PureComponent {
	
	render() {
		return (
		<LoadingProvider>
			<TableComponent />
			<ButtonWithLoadingContext label="상태 변경"/>
		</LoadingProvider>
		);
	}
}

export default HomePageComponent;
