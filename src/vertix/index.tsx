import React from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "@vertix/header/header";
import Home from "@vertix/pages/home";

import PrivacyPolicy from "@vertix/pages/legal-polices/privacy-policy";
import TermsOfService from "@vertix/pages/legal-polices/terms-of-service";

import Changelog from "@vertix/pages/changelog";

import FeaturesVideo from "@vertix/pages/features/features-video";
import FeaturesImages from "@vertix/pages/features/features-images";

import "./index.scss";

export default function Index() {
    const [ isLoaded, setLoaded ] = React.useState( document.readyState === "complete" );

    if ( ! isLoaded ) {
        window.addEventListener( "load", () => {
            setLoaded( true );
        } );
    }

    return (
        <div className={`body-container ${ document.readyState === "complete" || isLoaded ? "loaded" : "" }`}>
            <Header/>

            <section className="content">
                {/*<Suspense fallback={<div className="container">Loading...</div>}>*/ }
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/privacy-policy" element={ <PrivacyPolicy/> }/>
                    <Route path="/terms-of-service" element={ <TermsOfService/> }/>
                    <Route path="/features-video" element={ <FeaturesVideo/> }/>
                    <Route path="/features-images" element={ <FeaturesImages/> }/>
                    <Route path="/changelog" element={ <Changelog/> }/>
                </Routes>
                {/*</Suspense>*/ }
            </section>
        </div>
    );
}

