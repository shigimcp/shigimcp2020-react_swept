//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import '../stylesheets/Work.scss';


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================


const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';



//#region ==================== FUNCTION: workList() ====================

function WorkList() {


    //#region ==================== ASSETS Ref ====================

    const workItemRef = useRef(null);
    const masonryImgRef = useRef(null);

    //#endregion ==================== ASSETS Ref ====================



    //#region ==================== FUNCTION: handleClick(whatIsThis ====================

    function handleClick(thisWorkImage) {

        let thisWorkImageID = thisWorkImage.album_id + thisWorkImage.image_index + '_imgID';
        console.log('thisWorkImageID = thisWorkImage.album_id + thisWorkImage.image_index = ' + thisWorkImageID);

    }

    //#endregion ==================== FUNCTION: handleClick(whatIsThis ====================



    return (
        <div className='workList'>

            <hr />
            <h2>Banners</h2>
            <p className='note'>
                I want to eventually make these images clickable to trigger GSAP banners like the ones above that were [re]built in React (because I couldn't get react-adobe-animate or html-loader to work).<br />
                Ideally, the GSAP banners will play in place like they do on this page: <a href='https://www.shigimcp.com/hilites.html' target='_new'>https://www.shigimcp.com/hilites.html</a>.<br />
                SO FAR: <a href='./000'> See "000" above</a>
            </p>
            <hr />

            <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 3, 1640: 4, 1920: 5, 3000: 6 }}>
                <Masonry gutter='50px'>

                    {work.filter(isBanner => isBanner.format === 'banner').map((workImage) => (

                        <div className='workItem' key={workImage.album_id + workImage.image_index} ref={workItemRef}>
                            <div className='masonryDiv'>

                                <img
                                    className='masonryImg'
                                    id={workImage.album_id + workImage.image_index + '_imgID'}
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                    ref={masonryImgRef}
                                />

                                <div 
                                    className='bannerContainer' 
                                    id={workImage.album_id + workImage.image_index + '_bannerID'}
                                    onClick={() => handleClick(workImage)}
                                >
                                </div>

                            </div>

                            <p>
                                {workImage.caption}<br />
                                <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                            </p>

                        </div>
                    ))}

                </Masonry>
            </ResponsiveMasonry>


            <br /><br /><br /><br /><br />

            <hr />
            <h2>Web / Video</h2>
            <p className='note'>
                TO COME: These will open in modals on click...
            </p>
            <hr />

            <ResponsiveMasonry columnsCountBreakPoints={{ 1024: 1, 1366: 2, 1920: 3, 3840: 4 }}>
                <Masonry gutter='50px'>

                    {work.filter(isBanner => isBanner.format !== 'banner').map((workImage) => (

                        <div className='workItem' key={'web' + workImage.album_id + workImage.image_index} ref={workItemRef}>

                            <img
                                className='masonryImg'
                                id={workImage.album_id + workImage.image_index}
                                src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                alt={'album_id: ' + workImage.album_id + workImage.image_index}
                            />

                            <p>
                                {workImage.caption}<br />
                                <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                            </p>

                        </div>
                    ))}

                </Masonry>
            </ResponsiveMasonry>

        </div>
    )
}

//#endregion ==================== FUNCTION: workList() ====================


export const WorkEA = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
