import React from 'react';
import { render } from '@testing-library/react';

import {socialClasses} from '../SocialLink';
import TeamMember from './TeamMebmer.js';

test('render test member', () => {
    const data = [{
            type: 'linkedin',
            url: 'https://linkedin.com/123'
        },{
            type: 'github',
            url: 'https://github.com/123'
        },'https://linkedin.com/123',
        'https://github.com/123'
    ];

    const results = ['linkedin','github','linkedin','github'];

    for(let element of data) {
        const { container } = render(<TeamMember firstName="John" lastName="Doe" photoUrl="http://imgur.com"
                                                info="Lorem ipsum" links={[element]}/>);
        const icon = container.querySelector(`.${socialClasses[results[data.indexOf(element)]]}`);
        expect(icon).toBeInTheDocument();
    }
});