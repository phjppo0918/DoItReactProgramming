import React from 'react';
import {storiesOf} from '@storybook/react';

import {PageWithLoadData} from '../new05/lifecycle';

storiesOf('Lifecycle', module).addWithJSX('loadData example', ()=> (
    <PageWithLoadData loadData={()=> fetch('/').then(()=> 'hello')} />
));