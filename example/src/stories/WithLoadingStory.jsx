import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withLoading from '../new05/withLoading';

const TextWithLoading = withLoading('로딩중')(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(Button);

storiesOf('WithLoading', module)
    .addWithJSX('기본 설정', ()=>(
        <div>
            <ButtonWithLoading>안녕하세요</ButtonWithLoading>
            <TextWithLoading>안녕하세요</TextWithLoading>
        </div>
    ))
    .addWithJSX('isLoading example', ()=>(
        <div>
            <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
            <TextWithLoading isLoading>안녕하세요</TextWithLoading>
        </div>
    ));