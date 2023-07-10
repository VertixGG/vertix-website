import React, { Suspense, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "@vertix/header/header";
import Home from "@vertix/pages/home";

import 'react-photo-view/dist/react-photo-view.css';

import "./index.scss";

const InviteVertix = React.lazy( () => import( "@vertix/pages/invite-vertix" ) );

const PrivacyPolicy = React.lazy( () => import( "@vertix/pages/legal-polices/privacy-policy" ) );
const TermsOfService = React.lazy( () => import( "@vertix/pages/legal-polices/terms-of-service" ) );

const Changelog = React.lazy( () => import( "@vertix/pages/changelog" ) );
const Updates = React.lazy( () => import( "@vertix/pages/updates" ) );

const FeaturesVideo = React.lazy( () => import( "@vertix/pages/features/features-video" ) );
const FeaturesImages = React.lazy( () => import( "@vertix/pages/features/features-images" ) );
const FeaturesDynamicChannelsShowcase = React.lazy( () => import( "@vertix/pages/features/features-dynamic-channels-showcase" ) );

const EnableTransferOwnership = React.lazy( () => import( "@vertix/posts/enable-transfer-ownership" ) );
const HowToSetup = React.lazy( () => import( "@vertix/posts/how-to-setup" ) );
const HowToSetupLogsChannel = React.lazy( () => import( "@vertix/posts/how-to-setup-logs-channel" ) );
const HowToSetupDisplayStepStandalone = React.lazy( () => import( "@vertix/posts/steps/how-to-setup-display-step-standalone" ) );

function wrapPromiseSuspendable( promise: Promise<any> ) {
    let status = "pending";
    let result: any;
    let suspender = promise.then(
        ( r ) => {
            status = "success";
            result = r;
        },
        ( e ) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if ( status === "pending" ) {
                throw suspender;
            } else if ( status === "error" ) {
                throw result;
            } else if ( status === "success" ) {
                return result;
            }
        }
    };
}

const createLoadedPromise = ( isAlreadyLoaded = document.readyState === "complete"  ) => {
    return new Promise( ( resolve ) => {
        if ( isAlreadyLoaded ) {
            return resolve( true );
        }

        window.addEventListener( "load", () => {
            resolve( true );
        } );
    } ) as Promise<boolean>;
};

const loadedPromise = createLoadedPromise(),
    loadedSuspensePromise = wrapPromiseSuspendable( loadedPromise );

const RoutesComponent = () => {
    loadedSuspensePromise.read();

    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>

            <Route path="/invite-vertix" element={ <InviteVertix/> }/>

            <Route path="/privacy-policy" element={ <PrivacyPolicy/> }/>
            <Route path="/terms-of-service" element={ <TermsOfService/> }/>

            <Route path="/features/dynamic-channels-showcase" element={ <FeaturesDynamicChannelsShowcase/> }/>
            <Route path="/features-video" element={ <FeaturesVideo/> }/>
            <Route path="/features-images" element={ <FeaturesImages/> }/>

            <Route path="/changelog" element={ <Changelog/> }/>
            <Route path="/updates" element={ <Updates/> }/>

            <Route path="/posts/enable-transfer-ownership" element={ <EnableTransferOwnership/> }></Route>
            <Route path="/posts/how-to-setup" element={ <HowToSetup/> }></Route>
            <Route path="/posts/how-to-setup-logs-channel" element={ <HowToSetupLogsChannel/> }></Route>

            <Route path="/setup/:step" element={ <HowToSetupDisplayStepStandalone/> }></Route>

            <Route path="*" element={ <Home/> }/>
        </Routes>
    )
};

window.addEventListener( "beforeunload", ( e ) => {
    document.querySelector(".body-container")?.classList.add("unload");
    document.querySelector(".body-container")?.classList.remove("loaded");
} );

export default function Index() {
    const [ isLoaded, setLoaded ] = React.useState( false );

    loadedPromise.then( () => {
        setTimeout( () => {
            setLoaded( true );
        } );
    } );

    return (
        <div
            className={ `body-container ${ document.readyState === "complete" || isLoaded ? "loaded" : "not-loaded" }` }>
            <Header/>

            <section className="content">
                <Suspense fallback={ <div className="container box-1">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="spinner spinner-border text-primary" style={{width: "100px", height: "100px"}} role="status">
                            </div>
                        </div>
                    </div>
                </div> }>

                <RoutesComponent />

                </Suspense>
            </section>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <p className="col-md-4 mb-0 text-muted">© 2023 Vertix.gg</p>

                    <ul className="nav col-md-5 justify-content-end">
                        <li className="nav-item"><a href="/privacy-policy" className="nav-link px-2 text-muted">Privacy
                            Policy</a></li>
                        <li className="nav-item"><a href="/terms-of-service" className="nav-link px-2 text-muted">Terms
                            Of Service</a></li>
                        <li className="nav-item"><a href="/changelog" className="nav-link px-2 text-muted">Changelog</a>
                        </li>
                        <li className="nav-item"><a href="mailto:leonid@vertix.gg"
                                                    className="nav-link px-2 text-muted">Contact</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

