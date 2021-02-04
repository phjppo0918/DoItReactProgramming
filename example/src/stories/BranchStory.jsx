import React from 'react';
import {storiesOf} from '@storybook/react';

import BranchLoadingButton from '../new05/branch';

storiesOf('Branch', module)
    .addWithJSX('기본 설정', () => <BranchLoadingButton>안녕하세요</BranchLoadingButton>)
    .addWithJSX('isLoading example', () => (
        <BranchLoadingButton isLoading>안녕하세요!</BranchLoadingButton>
    ));
