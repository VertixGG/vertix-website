import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";

interface IAccordionProps {
    icon: string;
    title: string;
    children: React.ReactNode;
    onClick?: () => void;
    isOpen?: boolean;
}

export const AccordionItem = ( props: IAccordionProps ) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={ props.onClick }>
                    <button className={ `accordion-button ${ props.isOpen ? "collapsed" : "" }` } type="button">
                        <h4><span className="icon">{ props.icon }</span>{ props.title }</h4>
                    </button>
                </h2>
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
            setActiveIndex( -1 );
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
                            <PhotoView src="https://i.ibb.co/QJ5FpL2/interface.png">
                                <img src="https://i.ibb.co/QJ5FpL2/interface.png" alt="interface"/>
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
                            <PhotoView src="https://i.ibb.co/TWfS9bL/102.png">
                                <img src="https://i.ibb.co/TWfS9bL/102.png" alt="rename"/>
                            </PhotoView>
                        </div>
                        <div className="text" style={ { maxWidth: "550px" } }>
                            <ul>
                                <li><strong>Renaming channel is easy click on <b>( ✏️ Rename )</b> button.</strong></li>
                                <li>Then type new name of the channel and press <code>submit</code>.</li>
                            </ul>
                        </div>
                        <div className="image-placeholder">
                            <PhotoView src="https://i.ibb.co/ZY4SQDc/103.png">
                                <img src="https://i.ibb.co/ZY4SQDc/103.png" alt="renamed"/>
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
                            <PhotoView src="https://i.ibb.co/3SqqNB3/104.png">
                                <img src="https://i.ibb.co/3SqqNB3/104.png" alt="limit"/>
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
                            <PhotoView src="https://i.ibb.co/qpXZpLj/105.png">
                                <img src="https://i.ibb.co/qpXZpLj/105.png" alt="limited"/>
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
                        <p><strong><b>(🧹 Clear Chat )</b> button, will clear all the non embeds
                            messages.</strong></p>
                        <p>We believe in full customization, if you enabled <code>Send
                            Messages</code> sometimes you
                            may want to clean the channel
                        </p>
                    </div>

                    <PhotoProvider>
                        <div className="image-placeholder">
                            <PhotoView src="https://i.ibb.co/CH5BxgR/mess.png">
                                <img src="https://i.ibb.co/CH5BxgR/mess.png" alt="mess"/>
                            </PhotoView>
                        </div>


                        <div className="image-placeholder">
                            <PhotoView src="https://i.ibb.co/VLXrC68/clean.png">
                                <img src="https://i.ibb.co/VLXrC68/clean.png" alt="cleaned"/>
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
                        <p><b>(🚫 Private )</b> button, will allow only granted users to connect the
                            channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/txDVdf4/private.png">
                            <img src="https://i.ibb.co/txDVdf4/private.png" alt="private"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p><b>(🌐 Public )</b> button, restore the permissions
                            of <code>Connect</code> back to default,<br/> Now everyone can connect.
                        </p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/gZgqFGN/public.png">
                            <img src="https://i.ibb.co/gZgqFGN/public.png" alt="public"/>
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
                        <PhotoView src="https://i.ibb.co/M2WZXC3/hidden.png">
                            <img src="https://i.ibb.co/M2WZXC3/hidden.png" alt="hidden"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p><b>(🐵 Shown )</b> button, restore the permissions of <code>View
                            Channel</code> back to default.<br/>Now everyone can see the channel</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/pbNLHk6/shown.png">
                            <img src="https://i.ibb.co/pbNLHk6/shown.png" alt="shown"/>
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
                        <PhotoView src="https://i.ibb.co/cD7RVQV/access.png">
                            <img src="https://i.ibb.co/cD7RVQV/access.png" alt="access"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(👍 Grant Access )</b> menu, give member the permissions to override
                            channel state.</p>
                        <p>Granted users will can <b>see / join</b> the channel even if
                            its <b>private</b> or <b>hidden</b>.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/m0jpNDR/granted.png">
                            <img src="https://i.ibb.co/m0jpNDR/granted.png" alt="granted"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(👎 Remove Access )<b/> menu, remove user access from allowed list</b></p>
                        <p>User cannot enter or see the channel according the state.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/XD532yz/deny.png">
                            <img src="https://i.ibb.co/XD532yz/deny.png" alt="deny"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p className="fs-5"><b>(🫵 Block User Access )</b> menu, block & kick the user from the
                            channel.</p>
                        <p>Blocked user will have be restricted to view or connect to the channel.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/g3NVjDw/blocked.png">
                            <img src="https://i.ibb.co/g3NVjDw/blocked.png" alt="blocked"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(🤙 Un-block User Access )</b> menu, remove user from blocked users list</p>
                        <p>User can enter or see the channel according the state.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/h9XW7T6/unblock.png">
                            <img src="https://i.ibb.co/h9XW7T6/unblock.png" alt="unblock"/>
                        </PhotoView>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <div className="text">
                        <p><b>(👢 Kick User )</b> menu, simple as it, kicks user from the channel.
                        </p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/h9XW7T6/unblock.png">
                            <img src="https://i.ibb.co/h9XW7T6/unblock.png" alt="unblock"/>
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
                        <p><b>( 😈 Claim )</b> button will be enabled if the owner leaves the
                            channel</p>
                        <p>for more then X <code>default = 10</code> minutes. if he does not back, claim button will
                            be enabled.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/bKKt1rm/1017.png">
                            <img src="https://i.ibb.co/bKKt1rm/1017.png" alt="claim-start"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>If the owner back or clicked <code>claim</code> button it will back on charge!</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/JQV5LLy/1018.png">
                            <img src="https://i.ibb.co/JQV5LLy/1018.png" alt="back-to-change"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>If he didn't back and someone clicked on <b>claim</b> channel, he has X <code>default =
                            1</code> minute(s).</p>
                        <p>until he <b>claim</b> the ownership, unless someone else step in.</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/27L0w3g/1019.png">
                            <img src="https://i.ibb.co/27L0w3g/1019.png" alt="claim-process"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>Oh, see someone else step in, whole vote process will begin!</p>
                        <p>in case of tie, the initiator of <b>claim</b> will win the ownership over the channel!</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/g7ddZHZ/b.png">
                            <img src="https://i.ibb.co/g7ddZHZ/b.png" alt="vote-process"/>
                        </PhotoView>
                    </div>

                    <div className="text">
                        <p>At the end of the vote, you will see the new owner name, and link for vote results.</p>
                        <p>Bellow is how link for results looks like</p>
                    </div>

                    <div className="image-placeholder">
                        <PhotoView src="https://i.ibb.co/Q6MhYyV/z.png">
                            <img src="https://i.ibb.co/Q6MhYyV/z.png" alt="vote-process"/>
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

            <br />
            <p>
                Updated at: 26/06/23
            </p>
        </div>
    );
}


