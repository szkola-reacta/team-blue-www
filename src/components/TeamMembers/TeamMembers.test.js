import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamMembers from './TeamMembers';

jest.mock('../TeamMember/TeamMember', () => () => (<div>Team Member</div>));

test('renders TeamMembers component', async () => {
    const data = [{id: 1}, {id: 2}, {id: 3}];
    const { getByText, getAllByText } = render(<TeamMembers members={data} />);
    const headingElement = getByText(/members/i);
    expect(headingElement).toBeInTheDocument();

    const membersElements = getAllByText(/team member/i)
    expect(membersElements).toHaveLength(3)
});