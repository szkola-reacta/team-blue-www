import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeamMember from '../TeamMember';
import './TeamMembers.scss';

function TeamMembers({ members }) {
    return (
        <Container className="mt-5 mb-5" id="team-members">
            <Row>
                <Col>
                    <h1 className="text-center">Members</h1>
                </Col>
            </Row>
            <Row>
                {members.map((element, index) =>
                    <Col md={12} lg={6}>
                        <TeamMember key={`team-member-${index}`} {...element} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

TeamMembers.defaultProps = {
    members: []
}

export default TeamMembers;