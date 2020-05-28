import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './ProjectInfo.scss';

const ProjectInfo = ({ imageUrl, projectTitle, projectDescription, projectUrl }) => {
	return (
		<Container className="project-info mt-5 mb-5" id="project-info">
			<Row className="no-gutters position-relative align-items-center">
				<Col xs={12} md={6} className="p-4 p-md-6">
					<Image src={imageUrl} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Project screenshot" />
				</Col>
				<Col xs={12} md={6} className="pl-md-6">
					<Row className="justify-content-center p-4">
						<h3 className="mt-0">{projectTitle}</h3>
						<p>{projectDescription}</p>
						<Button href={projectUrl} variant="primary" size="lg" block>
							Go to project
						</Button>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default ProjectInfo
