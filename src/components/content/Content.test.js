import React from 'react';
import { render } from '@testing-library/react';
import Content from './Content';

test('renders Content component', () => {
    const { getByText } = render(<Content><h1>page content</h1></Content>);
    const linkElement = getByText(/page content/i);
    expect(linkElement).toBeInTheDocument();
});
