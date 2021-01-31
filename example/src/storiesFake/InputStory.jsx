import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';


import Input from '../03/Input';


/*
storiesOf('Input', module)
	.add('default setting', () => <Input name="name" />)
	.add('label example', () => <Input name="name" label="이름"/>)
	.add('onChange example', () => <Input name="name" onChange={action('onChange event action')}/>);
	*/

storiesOf('Input', module)
	.addWithJSX('default setting', () => <Input name="name" />)
	.addWithJSX('label example', () => <Input name="name" label="이름"/>)
	.addWithJSX('onChange example', () => <Input name="name" onChange={action('onChange event action')}/>);
							 