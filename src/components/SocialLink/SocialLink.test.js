import React from 'react';
import { render } from '@testing-library/react';
import SocialLink,{socialClasses} from './SocialLink.js';

test('render social link', () => {
    for(let type of Object.keys(socialClasses)) {
        const { container } = render(<SocialLink url="" type={type} />);
        const icon = container.querySelector(`.${socialClasses[type]}`);
        expect(icon).toBeInTheDocument();
    }
});