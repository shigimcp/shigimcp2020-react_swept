//#region ==================== IMPORTS ====================

import React from 'react';

import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Resume.scss';

import myData from '../data/MyData';


//#endregion ==================== IMPORTS ====================


//#region ==================== DATA ====================

const employerData = myData[0];
// const workData = myData[1];
// const aboutData = myData[2];

//#endregion ==================== DATA ====================


//#region ==================== RESUME: REF https://reactjs.org/docs/lists-and-keys.html ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';


function EmployerItem(props) {

    return (
        <div className='employerItem'>
            <img className='logo' src={remoteLoc + props.employerLogo} alt={'employer: ' + props.employer} />
            <div className='employerInfo'>
                <h1>{props.employer}</h1>
                <h2>{props.title}</h2>
                <div className='employerDates'>{props.dateStart} - {props.dateEnd}</div>
                <ul>
                    {props.info.split('\n').map((thisInfo, key) => {
                        return <li key={key}>{thisInfo}</li>
                    })}
                </ul>
                <p>
                    {(() => {
                        if (props.languages) {
                            return "languages: ";
                        } else {
                            return "";
                        }
                    })()}
                    {props.languages}
                </p>
                <p>{props.otherInfo}</p>
            </div>
        </div>
    )
}

function EmployerList() {

    const employerItems = employerData.map((employer) =>
        <EmployerItem
            key={employer.album_id}
            album_id={employer.album_id}
            employer={employer.employer}
            title={employer.title}
            dateStart={employer.date_start}
            dateEnd={employer.date_end}
            info={employer.info}
            otherInfo={employer.info_other}
            languages={employer.languages}
            employerLogo={employer.logopath}
        />
    );

    return (
        <div className='employerList'>
            {employerItems}
        </div>
    );
}

//#endregion ==================== RESUME ====================

export const Resume = () => {
    return (
        <BodyContainer title="Resume">
            <EmployerList />
        </BodyContainer>
    )
}
