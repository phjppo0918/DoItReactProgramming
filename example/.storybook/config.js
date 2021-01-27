import {configure} from '@storybook/react';
//import interoRequireDefault from 'bable-runtime/helpers/InteroRequireDefault';
function loadStories(){
	//const context = require.context('../src/stories', true, /Story\.js$/);
	//context.keys().froEach((srcFile)=> {
	//	interoRequireDefault(context(srcFile));
	//});
	
	require('../src/stories/InputStory');
	
	//스토리 파일을 이곳에 추가할 수 있습니다.
}

configure(loadStories, module);