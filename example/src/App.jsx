import React from 'react';

import TodoList from './03/TodoList';
//import Counter from './03/Counter';
//import NewCounter from './03/NewCounter';
//import LifecycleExample from './03/LifecycleExample';
//import ForceUpdateExample from './03/ForceUpdateExample'
//import StateExample from './03/StateExample';
//import ChildProperty from './03/ChildProperty';
//import DefaultPropsComponent from './03/DefaultPropsComponent';
//import ChildComponent2 from './03/ChildComponent2';
//import BooleanComponent from './03/BooleanComponent';
//import ChildComponent from './03/ChildComponent';
//import PropComponent from './03/PropsComponent';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {count: 10};
		this.resetCount = this.resetCount.bind(this);
	}
	resetCount(){
		this.setState(({count}) => ({count: count + 10}));
	}

	
	render(){
		
		                                                                                                  
		
		return (
			
			<div>
				<TodoList/>
			</div>
			
			
		);
	}
}

export default App;