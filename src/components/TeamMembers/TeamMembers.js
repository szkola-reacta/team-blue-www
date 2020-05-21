import React from 'react';

import TeamMember from '../TeamMember';
import './TeamMembers.css';

function TeamMembers({ members }) {
    return(
        <div className="team-members-wrapper" id="members">
            <h1>Members</h1>
            <div className="team-members">
                {members.map((element,index) => <TeamMember key={`team-member-${index}`} {...element} />)}
            </div>
        </div>
    );
}

TeamMembers.defaultProps = {
    members: []
}

export default TeamMembers;