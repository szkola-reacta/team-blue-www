import React from 'react'

import {  Row, Col, Image} from 'react-bootstrap'

const ProjectInfo = () => {
	return (
		<Row className="no-gutters bg-light position-relative align-items-center">
			<Col className="col-md-2"></Col>
			<Col className="col-md-4 p-4 p-md-4">
				<Image src="https://www.polska.travel/images/pl-PL/glowne-miasta/gdansk/gdansk_motlawa_1170.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="..." />
			</Col>
			<Col className="col-md-4 pl-md-4">
				<Row className="justify-content-center p-4">
					<h3 className="mt-0">Project Name</h3>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eligendi, nisi consequatur ratione eum nam accusantium quisquam molestias, dolorum ducimus officiis repellendus non expedita maxime libero reprehenderit provident voluptates autem.</p>
					<a href="#" className="stretched-link">Go to project</a>
				</Row>
			</Col>
			<Col className="col-md-2"></Col>
		</Row>
	)
}

export default ProjectInfo
