import React from 'react';

class LifeCycleExample extends React.Component {
	static getDerivedStateFromProps(){
	console.log('getDerivedStateFromProps 호출');
	return {};
	}
	
	constructor(props) {
		super(props);
		//getDerivedStateFromProps() 함수를 사용하므로
		//경고 메세지를 건너뛰기 위해 state 초깃값을 설정합니다.
		this.state = {};
		console.log('constructor 호출');
	}
	componentDidMount() {
		console.log('conponentDidMount 호출');
		this.setState({updated:true});
	}
	componentDidUpdate() {
		console.log('conponentDidUpdate 호출');
	}
	componentWillUnmount(){
		console.log('componentWillmount 호출');
	}
	getSnapshotBeforeUpdate(){
		console.log('getSnapshotBeforeUpdate 호출');
		return {};
	}
	shouldComponentUpdate(){
		console.log('shouldComponentUpdate 호출');
		return true;
	}
	render(){
		console.log('render 호출');
		return null;
	}
}

export default LifeCycleExample;