import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import ButtonWithContext from './ButtonWithContext';

function RowBComponent() {
	return <Button>button</Button>;
}

function RowCComponent() {
	return <ButtonWithContext>button</ButtonWithContext>;
}
