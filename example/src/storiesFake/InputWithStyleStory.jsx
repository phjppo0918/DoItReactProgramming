import React from 'react';
import {storiesOf} from '@storybook/react';

import Input from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
	.addWithJSX('default setting', () => <Input name="name" />)
	.addWithJSX('label example', () => <Input name="name" label="이름"/>)
	.addWithJSX('value example', () => <Input name="name" label="이름" value="doIt"/>)
	.addWithJSX('errorMessage example', () => <Input name="name" label="이름" errorMessage="please insert name"/>);