import React from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "@vertix/header/header";
import Home from "@vertix/pages/home";

import PrivacyPolicy from "@vertix/pages/legal-polices/privacy-policy";
import TermsOfService from "@vertix/pages/legal-polices/terms-of-service";

import Changelog from "@vertix/pages/changelog";

import FeaturesVideo from "@vertix/pages/features/features-video";
import FeaturesImages from "@vertix/pages/features/features-images";

import EnableTransferOwnership from "@vertix/posts/enable-transfer-ownership";
import HowToSetup from "@vertix/posts/how-to-setup";
import HowToSetupLogsChannel from "@vertix/posts/how-to-setup-logs-channel";

import "./index.scss";

export default function Index() {
    const [ isLoaded, setLoaded ] = React.useState( document.readyState === "complete" ),
        [ isUnloading, setUnload ] = React.useState( false );

    if ( ! isLoaded ) {
        window.addEventListener( "load", () => {
            setLoaded( true );
        } );

        window.addEventListener( "beforeunload", () => {
            setUnload( true );
        } );
    }

    return (
        <div className={`body-container ${ document.readyState === "complete" || isLoaded ? "loaded" : "" } ${ isUnloading ? "unload" : ""}`}>
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

                    <Route path="/posts/enable-transfer-ownership" element={ <EnableTransferOwnership /> }></Route>
                    <Route path="/posts/how-to-setup" element={ <HowToSetup /> }></Route>
                    <Route path="/posts/how-to-setup-logs-channel" element={ <HowToSetupLogsChannel /> }></Route>

                    <Route path="*" element={ <Home/> }/>



                </Routes>
                {/*</Suspense>*/ }
            </section>
        </div>
    );
}

