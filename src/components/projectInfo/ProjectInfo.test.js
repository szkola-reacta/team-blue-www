import React from 'react';
import { render } from '@testing-library/react';
import ProjectInfo from './ProjectInfo';
import TestImg from '../../images/kamilz.jpeg';

test('renders ProjectInfo component', () => {
    const { getByText, getByAltText } = render(<ProjectInfo imageUrl={TestImg} projectTitle="Project Title" projectDescription="Some Description" projectUrl="https://google.com" />);
    const imageElement = getByAltText(/project screenshot/i);
    const titleElement = getByText(/project title/i);
    const descriptionElement = getByText(/some description/i);
    const projectUrlButton = getByText(/go to project/i);

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(projectUrlButton).toBeInTheDocument();
});