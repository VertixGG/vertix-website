import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";

interface IAccordionProps {
    icon: string;
    title: string;
    children: React.ReactNode;
    onClick?: () => void;
    isOpen?: boolean;
}

const images = {
    "dynamic_channel_interface": "https://drive.google.com/uc?export=download&id=1obqUV-Aw_O52mWMrBpv02Ov4VMPdOdmj",

    "rename_channel_modal_102": "https://drive.google.com/uc?export=download&id=1qRyIgwhgUDAGTmZip4P-WC895gXoXHdV",
    "rename_channel_changed_103": "https://drive.google.com/uc?export=download&id=1ubFDTf100ysUp4uYJRqRMt8KWlxaGph7",

    "user_limit_modal_104": "https://drive.google.com/uc?export=download&id=1KAodJYnGFxaA6PcUU5DPuY03zKsZEyjS",
    "user_limit_changed_105": "https://drive.google.com/uc?export=download&id=1StfmzWg9X7wM30Rqzs2fQX5zv-kM0Zec",

    "transfer_start_2": "https://drive.google.com/uc?export=download&id=1MrzuSekawqtTHVGSqkRGT86OyWfTZb5Y",
    "transfer_select_user_3": "https://drive.google.com/uc?export=download&id=1LF1R61ZLFLWJyCFzDgejiqfFc01YUr7h",
    "transfer_yes_4": "https://drive.google.com/uc?export=download&id=179Zbu3Jh9o1qVRDQL1TeY0Q6My1bLqYo",
    "transfer_transfer_complete": "https://drive.google.com/uc?export=download&id=1xnip2nGjSX5jgD-3ZTypsteSVhEEWzxo",

    "clean_chat_mess": "https://drive.google.com/uc?export=download&id=1f8MnNPqM3LRRftCY1mMGSEd08a4Bq0Wx",
    "clean_chat_clean": "https://drive.google.com/uc?export=download&id=1kzgbbeMVxGa-LPEqyURoHnJzQzcny72c",

    "channel_state_private": "https://drive.google.com/uc?export=download&id=19z7g-5m8fIYVsaf4y9DtXswtrNkkTUTw",
    "channel_state_public": "https://drive.google.com/uc?export=download&id=1AJ_8VffWbZNPNeUMkZi_U7blD9fPgq5W",

    "visibility_state_shown": "https://drive.google.com/uc?export=download&id=1TVMcnl5TwvBipCsQU4pDrvuCVZr1h48e",
    "visibility_state_hidden": "https://drive.google.com/uc?export=download&id=1gfSFvFikgc8ZnY9bRDf1qUcIDxsw127M",

    "access_interface_access": "https://drive.google.com/uc?export=download&id=1vpH5GIPbOee8MVMwyfb5G9kFaCGzJyM_",
    "access_granted": "https://drive.google.com/uc?export=download&id=1melGwZ4yXDdvmtXm_bdxn0zYII5cEhlo",
    "access_deny": "https://drive.google.com/uc?export=download&id=13vd5GWD0XEOTP9ELgIJ7rXvUE7m3ALZl",
    "access_blocked": "https://drive.google.com/uc?export=download&id=1IqYZnnosQB_iAuxV2MESpb06ZKL1ASCm",
    "access_unblocked": "https://drive.google.com/uc?export=download&id=1zogACaX3R4SJtIBbBx6-pOP3gQLGC4pG",
    "access_kicked": "https://drive.google.com/uc?export=download&id=1NuBLlMajm2tgQ3497g6Q2XVO4eTTcfOR",

    "reset_success_1016": "https://drive.google.com/uc?export=download&id=1cp63udo86Ihr622gPlv_9bxFNaJK3jQe",

    "claim_about_start_1017": "https://drive.google.com/uc?export=download&id=1eoRowKTJM78aSgPmrj7QNmDzypnR6Pdb",
    "claim_back_on_charge_1018": "https://drive.google.com/uc?export=download&id=14LuGvhOAqvXq1_UO2bzuskbzEcn-e9PQ",
    "claim_wish_to_claim_1019": "https://drive.google.com/uc?export=download&id=1itLzgLc8IMq7HjrQSTwoSSNvbCQLXUle",

    "claim_2_candidates_wish_to_claim_b": "https://drive.google.com/uc?export=download&id=1wmG0eGxWQVSm2W8xZaPcmM4453FVgZ_u",

    "claim_results_z": "https://drive.google.com/uc?export=download&id=1WMMqogSswpxwNlmHrG3tj1il7u_YJsSR",
};

export const AccordionItem = ( props: IAccordionProps ) => {
    return (
        <>
            <div className="accordion-item">
                <div className="accordion-header" onClick={ props.onClick }>
                    <button className={ `accordion-button pt-2 pb-3 ps-3 ${ props.isOpen ? "collapsed" : "" }` }
                            type="button">
                        <span className="fs-5"><span className="icon fs-2">{ props.icon }</span>{ props.title }</span>
                    </button>
                </div>
                <div
                    className={ `accordion-collapse collapse ${ props.isOpen ? "show opacity-in-1 active" : "hide opacity-out-1" }` }
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        { props.children }
                    </div>
                </div>
            </div>
        </>
    )
};

export default function FeaturesDynamicChannelsShowcase() {
    const [ activeIndex, setActiveIndex ] = React.useState( 0 );

    const onClick = ( index: number ) => {
        if ( activeIndex === index ) {
            setActiveIndex( - 1 );
            return;
        }

        setActiveIndex( index );
    };

    const items = [
        {
            icon: "🎚",
            title: "Buttons Interface",
            content: (
                <>
                    <div className="image-placeholder">
                        <PhotoProvider>
                            <PhotoView src={ images.dynamic_channel_interface }>
                                <img src={ images.dynamic_channel_interface } alt="interface"/>
                            </PhotoView>
                        </PhotoProvider>
                    </div>

                    <div className="text">
                        <ul>
                            <li><strong>The buttons interface is located inside the dynamic channel.</strong></li>
                            <li>You can access it by opening the chat box of the dynamic channel.</li>
                            <li>You can modify the buttons using <code>/setup</code> command</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            icon: "✏️",
            title: "Rename Channel",
            content: (
                <>
                    <PhotoProvider>
                        <div className="image-placeholder">
                            <PhotoView src={ images.rename_channel_modal_102 }>
                                <img src={ images.rename_channel_modal_102 } alt="rename"/>
                            </PhotoView>
                        </div>
                        <div className="text" style={ { maxWidth: "550px" } }>
                            <ul>
                                <li><strong>Renaming channel is easy click on <b>( ✏️ Rename )</b> button.</strong></li>
                                <li>Then type new name of the channel and press <code>submit</code>.</li>
                            </ul>
                        </div>
                        <div className="image-placeholder">
                            <PhotoView src={ images.rename_channel_changed_103 }>
                                <img src={ images.rename_channel_changed_103 } alt="renamed"/>
                            </PhotoView>
                        </div>
                        <br/>
                    </PhotoProvider>
                </>
            )
        },
        {
            icon: "✋",
            title: "User Limit",
            content: (
                <>
                    <PhotoProvider>
                        <p className="fs-5"></p>

                        <div className="image-placeholder">
                            <PhotoView src={ images.user_limit_modal_104 }>
                                <img src={ images.user_limit_modal_104 } alt="limit"/>
                            </PhotoView>
                        </div>
                        <div className="text">
                            <ul>
                                <li><strong><b>(✋ Limit )</b> button, allow you to set user limit for the
                                    channel.</strong></li>
                                <li>You can see the limit between <code>0</code> to <code>99</code>, &nbsp; <code>0 =
                                    Unlimited</code></li>
                            </ul>
                        </div>
                        <div className="image-placeholder">
                            <PhotoView src={ images.user_limit_changed_105 }>
                                <img src={ images.user_limit_changed_105 } alt="limited"/>
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </>
            )
        },
        {
            icon: "🧹",
            title: "Clear Chat",
            content: (
                <>
                    <div className="text">
                        <p><strong><b>(🧹 Clear Chat )</b> button, will clear all the non embeds messages.</strong></p>
                        <p>We believe in full customization, if you enabled <code>Send Messages</code> sometimes you may
                            want to clean the channel</p>
                    </div>

                    <PhotoProvider>
                        <div className="image-placeholder">
                            <PhotoView src={ images.clean_chat_mess }>
                                <img src={ images.clean_chat_mess } alt="mess"/>
                            </PhotoView>
                        </div>

                        <div className="image-placeholder">
                            <PhotoView src={ images.clean_chat_clean }>
                                <img src={ images.clean_chat_clean } alt="cleaned"/>
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </>
            )
        },
        {
            icon: "🚫 / 🌐",
            title: "- Toggle Channel State",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p><b>(🚫 Private )</b> button, will allow only granted users to connect the channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.channel_state_private }>
                            <img src={ images.channel_state_private } alt="private"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p><b>(🌐 Public )</b> button, restore the permissions of <code>Connect</code> back to
                            default,<br/>Now everyone can connect.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.channel_state_public }>
                            <img src={ images.channel_state_public } alt="public"/>
                        </PhotoView>
                    </div>
                </PhotoProvider>
            )
        },
        {
            icon: "🙈 / 🐵",
            title: "- Toggle Channel Visibility State",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p><b>(🙈 Hidden )</b> button, change <code>View Channel</code> permission
                            to <code>False</code> only granted user can see the channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.visibility_state_shown }>
                            <img src={ images.visibility_state_shown } alt="hidden"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p><b>(🐵 Shown )</b> button, restore the permissions of <code>View Channel</code> back to
                            default.<br/>Now everyone can see the channel</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.visibility_state_hidden }>
                            <img src={ images.visibility_state_hidden } alt="shown"/>
                        </PhotoView>
                    </div>
                </PhotoProvider>
            )
        },
        {
            icon: "👥",
            title: "Access",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p className="fs-4"><b>(👥 Access )</b> button, provides management menus.</p>
                        <b>Displays:</b><br/>
                        - <b>Granted</b> Users<br/>
                        - <b>Blocked</b> Users
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.access_interface_access }>
                            <img src={ images.access_interface_access } alt="access"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(👍 Grant Access )</b> menu, giveOops, I apologize for the incomplete response. Here's the
                            remaining code snippet:
                            member the permissions to override channel state.</p>
                        <p>Granted users will can <b>see / join</b> the channel even if
                            its <b>private</b> or <b>hidden</b>.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.access_granted }>
                            <img src={ images.access_granted } alt="granted"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(👎 Remove Access )</b> menu, remove user access from allowed list</p>
                        <p>User cannot enter or see the channel according to the state.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.access_deny }>
                            <img src={ images.access_deny } alt="deny"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p className="fs-5"><b>(🤙 Block User Access )</b> menu, block & kick the user from the channel.
                        </p>
                        <p>Blocked users will be restricted from viewing or connecting to the channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.access_blocked }>
                            <img src={ images.access_blocked } alt="blocked"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(👍 Un-block User Access )</b> menu, remove user from blocked users list</p>
                        <p>User can enter or see the channel according to the state.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.access_unblocked }>
                            <img src={ images.access_unblocked } alt="unblock"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(👢 Kick User )</b> menu, simply kicks the user from the channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.access_kicked }>
                            <img src={ images.access_kicked } alt="kicked"/>
                        </PhotoView>
                    </div>

                </PhotoProvider>
            )
        },
        {
            icon: "🔃",
            title: "Reset Channel",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p><b>( 🔃 Reset )</b> button, need a quick reset to defaults? The result includes:</p>
                        <ul>
                            <li><code>Name</code></li>
                            <li><code>User Limit</code></li>
                            <li><code>State</code></li>
                            <li><code>Granted Users</code></li>
                        </ul>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.reset_success_1016 }>
                            <img src={ images.reset_success_1016 } alt="reset"/>
                        </PhotoView>
                    </div>
                </PhotoProvider>
            )
        },
        {
            icon: "🔀",
            title: "Transfer Channel",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p><b>( 🔀 Transfer )</b> button allows you to transfer channel ownership</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.transfer_start_2 }>
                            <img src={ images.transfer_start_2 } alt="transfer-start"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>Select the user you want to transfer the channel to</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.transfer_select_user_3 }>
                            <img src={ images.transfer_select_user_3 } alt="transfer-user"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p><span style={ { color: "yellow" } }>⚠️</span> Are you sure?</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.transfer_yes_4 }>
                            <img src={ images.transfer_yes_4 } alt="transfer-are-you-sure"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>The previous owner will lose control over the transferred channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={ images.transfer_transfer_complete }>
                            <img src={ images.transfer_transfer_complete } alt="transfer-done"/>
                        </PhotoView>
                    </div>
                </PhotoProvider>
            )
        },
        {
            icon: "🔃",
            title: "Reset Channel",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p><b>( 🔃 Reset )</b> button, need a quick reset to defaults? the result includes:</p>
                        <ul>
                            <li><code>Name</code></li>
                            <li><code>User Limit</code></li>
                            <li><code>State</code></li>
                            <li><code>Granted Users</code></li>
                        </ul>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/d7RHhTp/1016.png">
                            <img src="https://i.ibb.co/d7RHhTp/1016.png" alt="reset"/>
                        </PhotoView>
                    </div>
                </PhotoProvider>
            )
        },
        {
            icon: "🔀",
            title: "Transfer Channel",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p><b>( 🔀 Transfer )</b> button, allow you to transfer channel ownership</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/D4fj9yd/2.png">
                            <img src="https://i.ibb.co/D4fj9yd/2.png" alt="transfer-start"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>Select the user you to transfer the channel</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/wLwjGsW/3.png">
                            <img src="https://i.ibb.co/wLwjGsW/3.png" alt="trasnfer-user"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p><span style={ { color: "yellow" } }>⚠️</span> Are you sure?</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/Trcqvmr/4.png">
                            <img src="https://i.ibb.co/Trcqvmr/4.png.png" alt="taransfer-are-you-sure"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>the previous owner will fully lose control over the transferred channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/1GLWXSM/transfer-completed.png">
                            <img src="https://i.ibb.co/1GLWXSM/transfer-completed.png" alt="trasnfer-done"/>
                        </PhotoView>
                    </div>
                </PhotoProvider>
            )
        },
        {
            icon: "😈",
            title: "Claim Channel",
            content: (
                <PhotoProvider>
                    <div className="text">
                        <p><b>( 😈 Claim )</b> button will be enabled if the owner leaves the channel</p>
                        <p>for more than X <code>default = 10</code> minutes. If the owner does not return, the claim button will be enabled.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={images.claim_about_start_1017}>
                            <img src={images.claim_about_start_1017} alt="claim-start" />
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>If the owner returns or clicks the <code>claim</code>Apologies for the incomplete response once again. Here's the complete code snippet:
                            button, ownership will return to them!</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={images.claim_back_on_charge_1018}>
                            <img src={images.claim_back_on_charge_1018} alt="back-to-change" />
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>If the owner doesn't return, and someone else clicks on the <b>claim</b> button, they will have X minutes (<code>default = 1</code>) to claim the ownership.</p>
                        <p>If they don't claim within that time or if someone else steps in, the whole vote process will begin!</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={images.claim_2_candidates_wish_to_claim_b}>
                            <img src={images.claim_2_candidates_wish_to_claim_b} alt="vote-process" />
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>At the end of the vote, you will see the new owner's name and a link for the vote results.</p>
                        <p>Below is an example of how the link for the results looks like:</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src={images.claim_results_z}>
                            <img src={images.claim_results_z} alt="vote-results" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            )
        },
    ];

    return (
        <div className="container box-1 showcase">
            <h4>Dynamic Channel - Features</h4>
            <hr/>
            <div className="accordion" data-bs-theme="dark">
                {
                    items.map( ( item, index ) => (
                        <AccordionItem
                            key={ index }
                            icon={ item.icon }
                            title={ item.title }
                            isOpen={ activeIndex === index }
                            onClick={ () => onClick( index ) }
                        >
                            { item.content }
                        </AccordionItem>
                    ) )
                }
            </div>

            <br/>
            <p>
                Updated at: 26/06/23
            </p>
        </div>
    );
}


