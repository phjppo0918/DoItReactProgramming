import React from 'react';

import Counter from './03/Counter';
import NewCounter from './03/NewCounter';

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
	
	/*
	constructor(props) {
		super(props);
		this.state = {hasDestroyed: false};
	}
	
	componentDidMount() {
		this.setState({hasDestroyed:true})
	}*/
	
	render(){
		
		/*
		const array=[1,2,3];
		const obj = {name:'제목', age:30};
		const node = <h1>노드</h1>;
		const func = () => {console.log('메시지')};
		*/
		
		return (
		<div>
			<div>
				<Counter count={this.state.count} /> 
			</div>
		</div>
			/*
			<div>
				<div>
					{this.state.hasDestroyed ? null : <lifeCycleExample />}
				</div>
			</div>
			*/
			/*
			<div>
				<LifecycleExample />
			</div>
			*/
			/*
			<div>
				<ForceUpdateExample />
			</div>
			*/
			/*
			<div>
				<StateExample />
			</div>*/
			/*
			<ChildProperty>
				<div>
					<span>
						자식노드
					</span>
				</div>
			</ChildProperty>
			*/
			/*
			<div>
				<DefaultPropsComponent/>
			</div>
			*/
			/*
			<div>
				<ChildComponent2
					objValue={{age: 20}}
					requiredStringValue="문자"
				/>
			</div>
			*/
			/*
			<div>
				<div><b>지루할 때:</b><BooleanComponent bored/></div>
				<div><b>지루할 때:</b><BooleanComponent /></div>
			</div>
			*/
			/*
			<ChildComponent
				boolValue={true}
				numValye={1}
				arrayValue={array}
				objValue={obj}
				nodeValue={node}
				funcValue={func}
			/>
			*/
			
			/*
			<ChildComponent
				boolValue={true}
				numValye={1}
				arrayValue={[1,2,3]}
				objValue={{name:'제목', age: 30}}
				nodeValue={<h1>노드</h1>}
				funcValue={()=>{console.log('메시지');}}
			/>
			*/
			/*
			<PropComponent name="do it react"/>
			*/
			
		);
	}
}

export default App;