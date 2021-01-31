import React from 'react';
import {storiesOf} from '@storybook/react';

import BooleanComponent from '../03/BooleanComponent';

storiesOf('BooleanComponent', module)
	.add('default setting', () => <BooleanComponent/>)
	.add('bored setting', () => <BooleanComponent bored/>);