import React from 'react';
import ReactDOM from 'react-dom';
import ImagePreview from './ImagePreview';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImagePreview/>, div);
});