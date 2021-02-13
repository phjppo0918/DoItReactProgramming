import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';

import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';
import AdvReduxApp06 from '../07/AdvReduxApp06';
import AdvReduxApp07 from '../07/AdvReduxApp07';
import AdvReduxApp08 from '../07/AdvReduxApp08';
import SearchFilterReduxApp from '../07/SearchFilterReduxApp';


storiesOf('ReduxApp', module)
	.addWithJSX('기본 스토어 설정', () => <ReduxApp01 />)
	.addWithJSX('dispatch function', () => <ReduxApp02 />)
	.addWithJSX('SET_LOADING reducer', () =><ReduxApp03/>)
	.addWithJSX('advReduxApp 1', () => <AdvReduxApp01/>)
	.addWithJSX('advReduxApp 2', () => <AdvReduxApp02/>)
	.addWithJSX('advReduxApp 3', () => <AdvReduxApp03/>)
	.addWithJSX('advReduxApp 4', () => <AdvReduxApp04/>)
	.addWithJSX('advReduxApp 5', () => <AdvReduxApp05/>)
	.addWithJSX('advReduxApp 6', () => <AdvReduxApp06/>)
	.addWithJSX('advReduxApp 7', () => <AdvReduxApp07/>)
	.addWithJSX('advReduxApp 8', () => <AdvReduxApp08/>)
	.addWithJSX('SearchFilterReduxApp', () => <SearchFilterReduxApp/>);





	

