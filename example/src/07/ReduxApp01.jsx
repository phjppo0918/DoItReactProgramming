import React, {PureComponent} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

class ReduxApp extends PureComponent {
	store = createStore(state => state);

	render() {
		return (
			<Provider store={this.store}>
				redux example
			</Provider>
		);
	}
}

export default ReduxApp;