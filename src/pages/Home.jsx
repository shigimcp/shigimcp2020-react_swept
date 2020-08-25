import React from 'react';
import { useRef } from 'react';

import '../stylesheets/Home.scss';

import { FullPage } from '../components/FullPage';

import SquirrelBitVid from '../images/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.mp4';


export const Home = () => {

    const videoRef = useRef(null);

    return (
        <FullPage title='Home'>
            <video autoPlay poster='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg' alt='SquirrelBit_Single_Ladies'>
                <source src={SquirrelBitVid} type='video/mp4' ref={videoRef} />
            </video>
        </FullPage>
    )
}