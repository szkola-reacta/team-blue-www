import React from 'react';

import SocialLink,{socialClasses} from '../SocialLink';
import './TeamMember.css';
import placeholder from './img/placeholder.png';

function TeamMember({ firstName, lastName, photoUrl, info, links }) {
    const parseLinks = (linkElement) => {
        let linkType = '';
        console.log(linkElement);
        if(typeof(linkElement) !== "object") {
            console.log('its object');
            for(let type of Object.keys(socialClasses))
                if(linkElement.includes(type))
                    linkType = type;
            return {
                type: linkType,
                url: linkElement
            }
        }
        else
            return linkElement;
    }

    return (
        <div className="team-member">
            <img src={photoUrl} alt="avatar" />
            <div className="text-wrapper">
                <h3>{firstName} {lastName}
                    {links.map((element,index) =>
                        <SocialLink key={`social-link-${index}`} {...parseLinks(element)}/>)}
                </h3>
                <p>{info}</p>
            </div>
        </div>
    );
}

TeamMember.defaultProps = {
    photoUrl: placeholder
}

export default TeamMember;