import React from 'react';

import SocialLink, { socialClasses } from '../SocialLink';
import './TeamMember.scss';
import placeholder from './img/placeholder.png';

function TeamMember({ firstName, lastName, photoUrl, info, links }) {
    const parseLinks = (linkElement) => {
        let linkType = '';

        if (typeof (linkElement) !== "object") {
            for (let type of Object.keys(socialClasses)) {
                if (linkElement.includes(type)) {
                    linkType = type;
                }
            }

            return {
                type: linkType,
                url: linkElement
            }
        } else {
            return linkElement;
        }
    }

    const socialLinks = links.map((element, index) =>
        <SocialLink key={`social-link-${index}`} {...parseLinks(element)} />);

    return (
        <div className="team-member">
            <div className="team-member-avatar">
                <img src={photoUrl} alt="avatar" />
            </div>
            <div className="team-member-info">
                <h3>{firstName} {lastName} {socialLinks}</h3>
                <p>{info}</p>
            </div>
        </div>
    );
}

TeamMember.defaultProps = {
    photoUrl: placeholder,
    links: []
}

export default TeamMember;