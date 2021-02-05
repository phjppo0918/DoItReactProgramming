import React from 'react';
import {storiesOf} from '@storybook/react';

import {PageWithLoadData, PageWithLoadDataAndLoading} from '../new05/lifecycle';

storiesOf('Lifecycle', module)
    .addWithJSX('loadData example', ()=> (
    <PageWithLoadData loadData={()=> fetch('/').then(()=> 'hello')} />
    ))
    .addWithJSX('loading page example', () => (
        <PageWithLoadDataAndLoading loadData={()=> fetch('/').then(()=>'hello')}/>
    ));