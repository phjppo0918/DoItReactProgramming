import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
	constructor(props) {
		super(props){
			this.setREf = this.setRef.bind(this);
			this.handleChange = this.handleChange.bind(this);
		}
		handleChange(e){
			const {name, onChange} = this.props;
			if(onChange) {
				onChange(name, e.target.value);
			}
		}
		componentDidMount(){
			if(this.) ~~~~
		}
	}
}