import React from 'react';
import { render } from '@testing-library/react';
import CatchWord from './CatchWord';

test('renders Catch Word component', () => {
    const { getByText } = render(<CatchWord><h1>Hello there!</h1></CatchWord>);
    const linkElement = getByText(/hello there!/i);
    expect(linkElement).toBeInTheDocument();
});
