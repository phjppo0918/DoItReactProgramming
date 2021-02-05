import React from 'react';
import {storiesOf} from '@storybook/react';

import {CounterWithCountState} from '../new05/withState';

storiesOf('WithState', module)
    .addWithJSX('CounterWithCountState', () =><CounterWithCountState/>);