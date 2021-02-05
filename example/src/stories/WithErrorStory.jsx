import React from 'react';
import {storiesOf} from '@storybook/react';

import Input from '../04/InputWithStyle';
import withError from '../new05/withError';

const InputWithError = withError('올바르지 못한 값입니다')(Input);

storiesOf('WithError',module)
    .addWithJSX('default setting', () => (
        <InputWithError name="name" hasError />
    ))
    .addWithJSX('errorMessage example', () => (
        <InputWithError name="name" hasError errorMessage="필수 항목입니다."/>
    ));