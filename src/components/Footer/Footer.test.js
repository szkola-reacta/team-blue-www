import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/copyright/i);
    expect(linkElement).toBeInTheDocument();
});
