import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withHoC from '../05/withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('withHoC', module)
	.addWithJSX('default setting', () => (
		<div>
			<ButtonWithHoC> Hello! </ButtonWithHoC>
			<TextWithHoC> Hello! </TextWithHoC>
		</div>
	))
	.addWithJSX('large example', () => (
		<div>
			<ButtonWithHoC large> Hello! </ButtonWithHoC>
			<TextWithHoC large> Hello! </TextWithHoC>

		</div>
	));
