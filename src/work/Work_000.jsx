//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import { gsap } from 'gsap';


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

import EAAR_18951 from '../images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';
import NMPF_04852 from '../images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';
import NMMN_11155 from '../images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
import JCNR_07074 from '../images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from '../images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from '../images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
import BCBG_02342 from '../images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from '../images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

//#endregion ==================== CONSTANTS ====================



//#region ==================== workList() => <WorkList /> ====================

function WorkList() {

    //#region ==================== AVAILABLE GSAP BANNERS: banners[] ====================

    const banners = {
        EAAR_18951: EAAR_18951, 
        NMPF_04852: NMPF_04852, 
        NMMN_11155: NMMN_11155, 
        JCNR_07074: JCNR_07074, 
        BSPS_26897: BSPS_26897, 
        NMTG_26903: NMTG_26903, 
        JCVR_26963: JCVR_26963, 
        BCBG_02342: BCBG_02342, 
        BCBG_05500: BCBG_05500, 
    };

    //#endregion ==================== AVAILABLE GSAP BANNERS: banners[] ====================


    //#region ==================== ASSETS _Ref ====================

    const bannerMasonry_Ref = useRef(null);
    const webMasonry_Ref = useRef(null);

    const workItem_Ref = useRef(null);
    const masonryImg_Ref = useRef(null);

    const importContainer_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================



    //#region ==================== useState DEFs ====================

    const [bannerShow, setBannerShow] = useState();

    let [windowWidth, setWindowWidth] = useState(getWidth());

    //#endregion ==================== useState DEFs ====================



    //#region ==================== useEffect ====================

    useEffect(() => {

        gsap.set(['.masonryImg'], { transformOrigin: '50% 0', immediateRender: true });


        //#region -------------------- moveBanner: RELOCATE THE LOADED GSAP BANNER --------------------

        const moveBanner = () => {

            let bannerKey = document.getElementById('importContainerID').key;

            if (!bannerKey) {
                console.log('OOPS! No banner has been clicked yet OR you are clicking in the WEB/VIDEO section.');
            } else {

                //#region - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -

                let thisBannerY = document.getElementById(bannerKey).offsetTop - 170;
                let thisBannerX = document.getElementById(bannerKey).offsetLeft - (0.0125 * windowWidth);
                let thisBannerScale = document.getElementById(bannerKey).offsetWidth / 300;

                //#endregion - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -


                //#region - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -

                gsap.set([importContainer_Ref.current], { transformOrigin: '0 0', immediateRender: true });
                gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale });

                //#endregion - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -
            }
        }

        //#endregion -------------------- moveBanner: RELOCATE THE LOADED GSAP BANNER --------------------


        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        let timeoutId = null;

        const resizeListener = () => {

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

            moveBanner();
        };

        window.addEventListener('resize', resizeListener);

        //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------


        return () => {
            window.removeEventListener('resize', resizeListener);
        }

    }, [windowWidth]);

    //#endregion ==================== useEffect ====================

    

    //#region ==================== FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================

    function handleClick(thisWorkImage) {

        //#region - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -

        if (banners[thisWorkImage.link2]) {

            const thisBanner = React.createElement(banners[thisWorkImage.link2]);

            setBannerShow(thisBanner);

            document.getElementById('importContainerID').key = thisWorkImage.link2;

        } else {
            setBannerShow(thisWorkImage.link2 + ' THIS CONTENT COMING SOON!');
        }

        //#endregion - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -

        let thisBannerY = document.getElementById(thisWorkImage.link2).offsetTop - 170;
        let thisBannerX = document.getElementById(thisWorkImage.link2).offsetLeft - (0.0125 * windowWidth);
        let thisBannerScale = document.getElementById(thisWorkImage.link2).offsetWidth / 300;

        //#endregion - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -

        gsap.set([importContainer_Ref.current], { transformOrigin: '0 0', immediateRender: true });
        gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale });

        //#endregion - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -
    }

    //#endregion ==================== FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================



    //#region ==================== RETURN (className='workList') ====================

    return (
        <div className='workList'>

            <div className='importContainer' id='importContainerID' ref={importContainer_Ref}>
                {bannerShow}
            </div>


        {/* #region ------------------------- BANNERS ------------------------- */}

            <section className='masonrySection'>

                <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 }}>
                    <Masonry className='masonry' id='bannerMasonryID' gutter='1.25vw' ref={bannerMasonry_Ref}>

                        {work.filter(isBanner => isBanner.format === 'banner').map((workImage) => (

                            <div className='workItem' id={workImage.link2} key={'banner' + workImage.album_id + workImage.image_index} ref={workItem_Ref}>

                                <img
                                    className='masonryImg'
                                    id={workImage.album_id + workImage.image_index + '_imgID'}
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                    onClick={() => handleClick(workImage)}
                                    ref={masonryImg_Ref}
                                />

                                <p className='masonryInfo' title='masonryInfoTitle'>
                                    {workImage.caption}<br />
                                    <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                                </p>

                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>

            </section>

        {/* #endregion ------------------------- BANNERS ------------------------- */}


        {/* #region ------------------------- WEB / VIDEO ------------------------- */}

            <section>
                <hr />
                <h2>Web / Video</h2>
                <hr />
            </section>

            <section className='masonrySection'>

                <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 960: 2, 1920: 3, 3840: 4 }}>
                    <Masonry className='masonry' id='webMasonryID' gutter='1.25vw' ref={webMasonry_Ref}>

                        {work.filter(isBanner => isBanner.format !== 'banner').map((workImage) => (

                            <div className='workItem' id={workImage.link2} key={'web' + workImage.album_id + workImage.image_index} ref={workItem_Ref}>

                                <img
                                    className='masonryImg'
                                    id={workImage.link2}
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                    onClick={() => handleClick(workImage)}
                                    ref={masonryImg_Ref}
                                />

                                <p className='masonryInfo' title='masonryInfoTitle'>
                                    {workImage.caption}<br />
                                    <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                                </p>

                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>

            </section>

        {/* #endregion ------------------------- WEB / VIDEO ------------------------- */}

        </div>
    )

    //#endregion ==================== RETURN (className='workList') ====================

}

//#endregion ==================== workList() => <WorkList /> ====================




export const Work000 = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
