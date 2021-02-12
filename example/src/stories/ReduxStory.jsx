import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';


storiesOf('ReduxApp', module)
	.addWithJSX('기본 스토어 설정', () => <ReduxApp01 />)
	.addWithJSX('dispatch function', () => <ReduxApp02 />)
	.addWithJSX('SET_LOADING reducer', () =><ReduxApp03/>);