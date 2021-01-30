import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import CheckBox from '../04/CheckBox';
import Text from '../04/Text';

storiesOf('CheckBox', module)
	.addWithJSX('default setting', () => (<CheckBox name="agree"/>))
	.addWithJSX('children example', () => (
		<CheckBox name ="agree">
			<Text>i agree!</Text>
		</CheckBox>
	))
	.addWithJSX('label example', () => (
		<CheckBox name ="agree" label="이름">
			<Text>i agree!</Text>
		</CheckBox>
	))
	.addWithJSX('onChange example', () => (
		<CheckBox name ="agree" onChange={action('occur onChange event')}>
			<Text>i agree!</Text>
		</CheckBox>
	))
	.addWithJSX('checked example', () => (
		<CheckBox name ="agree"  label="이름" checked>
			<Text>i agree!</Text>
		</CheckBox>
	))
	.addWithJSX('errorMessage example', () => (
		<CheckBox name ="agree" label="이름" errorMessage="need agree">
			<Text>i agree!</Text>
		</CheckBox>
	))
	.addWithJSX('autoFocus example', () => (
		<CheckBox name ="agree"  label="이름"  autoFocus>
			<Text>i agree!</Text>
		</CheckBox>
	));