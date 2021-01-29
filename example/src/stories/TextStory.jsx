import React from 'react';
import {storiesOf} from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
	.addWithJSX('default setting', () => <Text>안녕하세요</Text>)
	.addWithJSX('large example', () => <Text large>안녕하세요</Text>)
	.addWithJSX('xlarge example', () => <Text xlarge>안녕하세요</Text>)
	.addWithJSX('small example', () => <Text small>안녕하세요</Text>)				
	.addWithJSX('xsmall example', () => <Text xsmall>안녕하세요</Text>)	
	.addWithJSX('primary example', () => <Text primary>안녕하세요</Text>)				
	.addWithJSX('secondary example', () => <Text secondary>안녕하세요</Text>)	
	.addWithJSX('primary with large example', () => <Text primary large>안녕하세요</Text>);				