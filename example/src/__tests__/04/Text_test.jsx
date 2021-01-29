import React from 'react';
import {shallow} from 'enzyme';

import Text from '../../04/Text';

describe('<Text>', () => {
	it('renders without crashing', () => {
		expect(() => {
			shallow(<Text>Test</Text>);
		}).not.toThrow();
	});
	
	it('contains <span>', () => {
		expect(shallow(<Text>test</Text>).find('span')).toHaveLength(1);
	});
});