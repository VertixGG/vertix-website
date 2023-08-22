import { useState } from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";

import { allImagesLoadedPromise } from "@internal/utils/loading";

import LoadingContainer from "@vertix/ui/loading-container";

( () => {
    // @ts-ignore
    import ( "./features-images.scss" );
} )();


const images_v_0_0_0 = {
    '101.png': 'https://drive.google.com/uc?export=download&id=1Jiq9WkmKl7AsEQhT0zY2d0zn4TfJqLkB',
    '102.png': 'https://drive.google.com/uc?export=download&id=1JYjRI2h6WRlCM_1aOHfu_K02H0GMAhgv',
    '103.png': 'https://drive.google.com/uc?export=download&id=1IhJ5m0loY74O4l5KIzpr-z36aqEuZ6be',
    '104.png': 'https://drive.google.com/uc?export=download&id=1Cp6vY6WHj37Z5KS789ihaFdOtRcB-gHR',
    '105.png': 'https://drive.google.com/uc?export=download&id=1F5TmeghaZ0asW60JRcr8A8rCeHj4SiCq',
    '106.png': 'https://drive.google.com/uc?export=download&id=1LmgWhvfxamVNsMvLhtENkzGs5xrGPb50',
    '107.png': 'https://drive.google.com/uc?export=download&id=1ZvhuojDvEl1Oclpx-_akaZf0H0Z6j5eF',
    '108.png': 'https://drive.google.com/uc?export=download&id=1l0Yws2rW1LIfIrg6QfeYSmqgmibiS88b',
    '109.png': 'https://drive.google.com/uc?export=download&id=1YXO1p7LaT-AyUitHNWRY8oEX_aoUXd4d',
    '1010.png': 'https://drive.google.com/uc?export=download&id=1UIblGn5LbBPR2bNk4I-Tp-58bMfKYMOH',
    '1011.png': 'https://drive.google.com/uc?export=download&id=1PgowonIbA4n-y9GVX900Psaf3d73XzFz',
    '1012.png': 'https://drive.google.com/uc?export=download&id=1-cPotdRqFdhmTuUJBXFs6OtFS73afoxX',
    '1013.png': 'https://drive.google.com/uc?export=download&id=1VRH7_T5tej0DOsRoA2qMpLUYmlsRRS80',
    '1014.png': 'https://drive.google.com/uc?export=download&id=1f5sleX8gbdm8SXpNzo6wbjLiaCBwFOMn',
    '1015.png': 'https://drive.google.com/uc?export=download&id=1mYOgeqhpByQURj20iSjfSXgMZPi1RodU',
    '1016.png': 'https://drive.google.com/uc?export=download&id=1di9fkBmgnqRoSrQie3Z-nZqUCL60xOEp',
    '1017.png': 'https://drive.google.com/uc?export=download&id=1yhfz7mSwOousrCWizpbdCKVMg4du_3Ae',
    '1018.png': 'https://drive.google.com/uc?export=download&id=1BJ8RX3qTlLHFW0JMwJkZEKA1MPYc0vc-',
    '1019.png': 'https://drive.google.com/uc?export=download&id=1NbxKErE1Unix4jMtv6w8AM9lWYmPhPtw',
    'a.png': 'https://drive.google.com/uc?export=download&id=1RYHgK_1MLAW9ZDoXZm50MNzkUgBKgEqX',
    'b.png': 'https://drive.google.com/uc?export=download&id=1eCdYzPI6KPVjpNsvgKUuZuYA7w-lkKZR',
    'd.png': 'https://drive.google.com/uc?export=download&id=1x1i4VlPurXhC_5P2PiD5O2d8UflI4xrf',
    'z.png': 'https://drive.google.com/uc?export=download&id=1sYbjF4KOJlKrWvgMf_yvsNdQ1B9kP4yX',
};

const images_v_0_0_3 = {
    '000.png': 'https://drive.google.com/uc?export=download&id=1ilmJVl-53oliBnSkSRanq_GSApnmIsva',
    '001.png': 'https://drive.google.com/uc?export=download&id=1OjWVdVlNX-1ICowGjxE_n-A-icKnoldp',
    '002.png': 'https://drive.google.com/uc?export=download&id=161DwOdsG10Kfsw6H_H7g3kx2cPasS0Qb',
    '003.png': 'https://drive.google.com/uc?export=download&id=1qL2KQuyhxVRP3tvDgqaNmvyGOhptCt6t',
    '004.png': 'https://drive.google.com/uc?export=download&id=1fW-4gMLUSglnybbRckgQLqlaABE2Mu2M',
    '005.png': 'https://drive.google.com/uc?export=download&id=1N0LMK-H2WKo_6kbtfQOGNYh-mB_KMB88',
    '006.png': 'https://drive.google.com/uc?export=download&id=15HpnUNQw-qY7c6jLKSGmC_1Z5knLs65E',
    '007.png': 'https://drive.google.com/uc?export=download&id=1rArGkBeNH858HQAKwezhpaGUV73m6x6P',
    '008.png': 'https://drive.google.com/uc?export=download&id=1P29HMJ6jAXf-3EMlTR7rASwFme0Ra-TI',
    '009.png': 'https://drive.google.com/uc?export=download&id=1dGHxinqyEDvgoVV9kQ8nbgISHV4pd-K5',
    '010.png': 'https://drive.google.com/uc?export=download&id=1Pkfd82AVATAvZuGX1tfKCCe4XnuQmkiY',
    '011.png': 'https://drive.google.com/uc?export=download&id=1tzo7QYvI5X2IuhjC-akHoOfrBKboM0hi',
    '012.png': 'https://drive.google.com/uc?export=download&id=1rXde4Uxy1aabbPq-bj-VfL_r6oOPoNJT',
    '013.png': 'https://drive.google.com/uc?export=download&id=1wOTBCLj9Z_ON2e4xBSiIJQzDdPz-EmNo',
    '014.png': 'https://drive.google.com/uc?export=download&id=1VxVPLRMFz9A6I50-CFUoKggCyR9Lv9BE',
    '015.png': 'https://drive.google.com/uc?export=download&id=1BeBko_dQDNi7puCTYhwCwxD5krjFBcFH',
    '016.png': 'https://drive.google.com/uc?export=download&id=1es44H5sB58E964TDPf0ZdUCgLlm1VAlx',
    '017.png': 'https://drive.google.com/uc?export=download&id=1ipDVlDF-cSZqxuRvwuugmsuuo73Y9BEj',
    '018.png': 'https://drive.google.com/uc?export=download&id=104jarpPEss-GNxAc-JcI5Yn5HAK1oO6x',
    '019.png': 'https://drive.google.com/uc?export=download&id=1iGI55bL735Su-Tg49rkctm3F22xA543z',
    '020.png': 'https://drive.google.com/uc?export=download&id=1KStTVW_Q4-CIcXReJZonexMj59QRKLyl',
    '021.png': 'https://drive.google.com/uc?export=download&id=1qPn5Fx_TEGKRWrm3mDETaKhznEh3kfvs',
    '022.png': 'https://drive.google.com/uc?export=download&id=1ZnOjrry2Ebv-neyxzn4I39Q9sO0yLWgz',
    '024.png': 'https://drive.google.com/uc?export=download&id=1Ysvs4A0suOZMK5W2naObDNlp7q4CjunL',
    '025.png': 'https://drive.google.com/uc?export=download&id=190rGba4dMP24nI7v7y5QlHajRcXwQdps',
    '026.png': 'https://drive.google.com/uc?export=download&id=1r0Rk8ag3OL7YRtnDiPCCEWaNgTxaB6TB',
    '027.png': 'https://drive.google.com/uc?export=download&id=1NMIKLygTsRFet9KlMXFaTNl8mZaLMGdc',
};

const images_v_0_0_4 = {
    '1.png': 'https://drive.google.com/uc?export=download&id=1HQGfiI9X_PMtLPC1z_nqFwvcoUdE-zs6',
    '2.png': 'https://drive.google.com/uc?export=download&id=1ofZwcSzbfiC3Kd-PLy0Af0JeMdA8L6FE',
    '3.png': 'https://drive.google.com/uc?export=download&id=11MQfUkUTfWc1X-HR2BvwLiA7F8HgYHs5',
    '4.png': 'https://drive.google.com/uc?export=download&id=19uljEWWivPIDIGTPN7GhAa2YsnQy7gue',
    '5.png': 'https://drive.google.com/uc?export=download&id=1kilRqMX-PoGZZlbJIk4Ry7ur4d5DtpQr',
    '6.png': 'https://drive.google.com/uc?export=download&id=1IE7VHEJps73u-cBu-NdsxtWdLjgE7DYr',
};

export function ImagesGallery( props: { show: boolean } ) {
    return (
        <div className={ `container box-1 image-gallery ${ props.show ? "visible" : "invisible" }` }>
            <h2>Features Images</h2>
            <br/>

            <h5>Updated at: 20/06/2023, v0.0.4</h5>
            <div className={ "d-flex justify-content-center row p-3" }>
                <PhotoProvider>
                    { Object.values( images_v_0_0_4 ).map( ( image, index ) => (
                        <PhotoView key={ index } src={ image }><img src={ image } alt=""/></PhotoView>
                    ) ) }
                </PhotoProvider>
            </div>

            <h5>Updated at: 16/06/2023, v0.0.3</h5>
            <h6><b>Setup</b> demonstration</h6>
            <div className={ "d-flex justify-content-center row p-3" }>
                <PhotoProvider>
                    { Object.values( images_v_0_0_3 ).map( ( image, index ) => (
                        <PhotoView key={ index } src={ image }><img src={ image } alt=""/></PhotoView>
                    ) ) }
                </PhotoProvider>
            </div>

            <h5>Updated at: 03/06/2023, v0.0.0</h5>
            <h6><b>Dynamic Channel</b> management demonstration</h6>
            <div className={ "d-flex justify-content-center row p-3" }>
                <PhotoProvider>
                    { Object.values( images_v_0_0_0 ).map( ( image, index ) => (
                        <PhotoView key={ index } src={ image }><img src={ image } alt=""/></PhotoView>
                    ) ) }
                </PhotoProvider>
            </div>
        </div>
    )
}

export default function FeaturesImages() {
    const [ isImagesLoaded, setIsImagesLoaded ] = useState( false );

    setTimeout( () => {
        allImagesLoadedPromise().then( () => {
            setIsImagesLoaded( true );
        } );
    } );

    return (
        <>
            {
                ! isImagesLoaded && <LoadingContainer/>
            }
            <ImagesGallery show={ isImagesLoaded }/>
        </>
    )

}
