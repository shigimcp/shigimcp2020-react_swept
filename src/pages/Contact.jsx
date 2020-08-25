import React from 'react';

import '../stylesheets/Contact.scss';

import { FullPage } from '../components/FullPage';


export const Contact = ({ name }) => {
    return (
        <FullPage title="Contact">
            <img className="contactImgHolder" src="https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/SquirrelBit_3D.jpg" alt="SquirrelBit_3D" />
            <h1>Contact Page</h1>
            <h1>Hello, {name}</h1>
        </FullPage>
    )
}