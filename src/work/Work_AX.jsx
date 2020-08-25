//#region ==================== IMPORTS ====================

import React from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Moment from 'react-moment';


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../data/json/work_json/work_ax.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

//#endregion ==================== CONSTANTS ====================



//#region -------------------- MASONRY: REF https://cedricdelpoux.github.io/react-responsive-masonry/ --------------------

function WorkList() {

    return (
        <div className='workList'>
            <section className='masonrySection'>
                <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 1366: 2, 1920: 3, 2560: 4 }}>
                    <Masonry className='masonry' gutter='1.25vw'>
                        {work.map((workImage, i) => (
                            <div className='workItem' key={workImage.album_id + workImage.image_index}>

                                <img
                                    className='masonryImg'
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
            </section>
        </div>
    )
}

//#endregion -------------------- MASONRY: REF https://cedricdelpoux.github.io/react-responsive-masonry/ --------------------

//#endregion ==================== WorkAX ====================


export const WorkAX = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
