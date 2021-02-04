import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withHoC from '../new05/withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoc', module)
    .addWithJSX('기본 설정', () => (
        <div>
            <ButtonWithHoC>안녕하세요</ButtonWithHoC>
            <TextWithHoC>안녕하세요</TextWithHoC>
        </div>
    ))
    .addWithJSX('large example', ()=>(
        <div>
             <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
            <TextWithHoC large>안녕하세요</TextWithHoC>
        </div>
    ));
