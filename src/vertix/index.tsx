import React from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "@vertix/header/header";
import Home from "@vertix/pages/home";

import PrivacyPolicy from "@vertix/pages/legal-polices/privacy-policy";
import TermsOfService from "@vertix/pages/legal-polices/terms-of-service";

import Changelog from "@vertix/pages/changelog";
import Updates from "@vertix/pages/updates";

import FeaturesVideo from "@vertix/pages/features/features-video";
import FeaturesImages from "@vertix/pages/features/features-images";
import FeaturesDynamicChannelsShowcase from "@vertix/pages/features/features-dynamic-channels-showcase";


import EnableTransferOwnership from "@vertix/posts/enable-transfer-ownership";
import HowToSetup from "@vertix/posts/how-to-setup";
import HowToSetupLogsChannel from "@vertix/posts/how-to-setup-logs-channel";

import 'react-photo-view/dist/react-photo-view.css';

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

                    <Route path="/features/dynamic-channels-showcase" element={ <FeaturesDynamicChannelsShowcase/> }/>
                    <Route path="/features-video" element={ <FeaturesVideo/> }/>
                    <Route path="/features-images" element={ <FeaturesImages/> }/>

                    <Route path="/changelog" element={ <Changelog/> }/>
                    <Route path="/updates" element={ <Updates/> }/>

                    <Route path="/posts/enable-transfer-ownership" element={ <EnableTransferOwnership /> }></Route>
                    <Route path="/posts/how-to-setup" element={ <HowToSetup /> }></Route>
                    <Route path="/posts/how-to-setup-logs-channel" element={ <HowToSetupLogsChannel /> }></Route>

                    <Route path="*" element={ <Home/> }/>

                </Routes>
                {/*</Suspense>*/ }
            </section>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <p className="col-md-4 mb-0 text-muted">© 2023 Vertix.gg</p>


                    <ul className="nav col-md-5 justify-content-end">
                        <li className="nav-item"><a href="/privacy-policy" className="nav-link px-2 text-muted">Privacy Policy</a></li>
                        <li className="nav-item"><a href="/terms-of-service" className="nav-link px-2 text-muted">Terms Of Service</a></li>
                        <li className="nav-item"><a href="/changelog" className="nav-link px-2 text-muted">Changelog</a></li>
                        <li className="nav-item"><a href="mailto:leonid@vertix.gg" className="nav-link px-2 text-muted">Contact</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

