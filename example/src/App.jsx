import React from 'react';
import ChildComponent2 from './03/ChildComponent2';
//import BooleanComponent from './03/BooleanComponent';
//import ChildComponent from './03/ChildComponent';
//import PropComponent from './03/PropsComponent';

class App extends React.Component {
	render(){
		/*
		const array=[1,2,3];
		const obj = {name:'제목', age:30};
		const node = <h1>노드</h1>;
		const func = () => {console.log('메시지')};
		*/
		
		return (
			<div>
				<ChildComponent2
					objValue={{age: 20}}
					requiredStringValue="문자"
				/>
			</div>
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