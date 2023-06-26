export default function HowToSetup() {
    return (
        <>
            <div className="container box-1">
                <h4>Setup step-by-step</h4>
                <br/>

                <ul className="fs-5 ">
                    <li>
                        Enter your discord server and type <code>/setup</code> in any channel.
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/LYkTJyh/e1.png" alt="s1"/>
                    </li>
                    <hr/>
                    <li>
                        <h3>Step 1</h3>
                        Click on <b>( ➕ Create Master Channel )</b> button to create new master channel.
                        <ul>
                            <li>What is a <b>Master Channel</b>?</li>
                            <ul>
                                <li>A voice channel that generate dynamic temporary voice channels, his name will be <b>(
                                    ➕ New Channel )</b></li>
                            </ul>

                            <br/>

                            <li>How i generate new temporary dynamic channel?</li>
                            <ul>
                                <li>Simply just join the <b>Master Channel ( ➕ New Channel )</b> and you will be
                                    automatically moved to new temporary voice channel
                                </li>
                            </ul>
                        </ul>
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/mNcTWQK/000.png" alt="s2"/>
                    </li>
                    <br/>
                    <li>
                        Set default channel's name template by pressing <b>( #️⃣ Edit Channel Name )</b> button or
                        continue with <b>default</b> by pressing <b>( Next ▶ )</b>.
                        <ul>
                            <li>What is <b>Default Channel's Name Template?</b></li>
                            <ul>
                                <li>Its the name that will be used to create the temporary voice channels, that are
                                    created by joining this <b>Master Channel.</b></li>
                            </ul>
                        </ul>
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/BVdjwFW/001.png" alt="s3"/>
                    </li>
                    <br/>
                    <li>
                        Set default channel's name template by pressing <b>( Submit )</b>.
                        <ul>
                            <li>What is <code>$user</code>?</li>
                            <ul>
                                <li>Its name <b>Placeholder</b> that will be used to create the temporary voice
                                    channels, that are created by joining this <b>Master Channel.</b></li>
                                <li>Assume your name in discord is <b>Bob</b>, And the placeholder is: <code>{ "{User}" }'s Channel</code> by
                                    joining to the <b>Master Channel</b> newly created temporary channel's name
                                    will be <code>Bob's Channel</code></li>
                            </ul>
                        </ul>
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/0Q6mRPM/002.png" alt="s3"/>
                        <ul>
                            <li>Press <b>( Submit )</b> button.</li>
                        </ul>
                        <img className="normalize" src="https://i.ibb.co/mHqSW4H/003.png" alt="s4"/>
                        <ul>
                            <li><li>Then press <b>( Next ▶ )</b> to continue.</li></li>
                        </ul>
                    </li>
                    <hr/>
                    <li>
                        <h3>Step 2</h3>

                        Set temporary dynamic channel's button interface click on ( <svg aria-hidden="true" role="img"
                                                                                         width="24" height="24"
                                                                                         viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path>
                    </svg> ) down arrow or
                        continue with <b>( <code>default = All Buttons Enabled</code> )</b> by pressing <b>( Next ▶
                        )</b>.
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/ZGCGwP1/setup-step-2-buttons-set-arrow-red.png"
                             alt="s5"/>
                    </li>
                    <br/>
                    <li>
                        Select buttons you wish to enable in your temporary dynamic channels that created by joining
                        this <b>Master Channel</b>.
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/fn9Bsq2/e5.png" alt="s6"/>
                    </li>
                    <br/>
                    <li>
                        What the buttons do?
                        <ul className="fs-7">
                            <li><b>( ✏️ ∙ Rename ) - Allow the channel owner to rename his channel.</b></li>
                            <li><b>( ✋ ∙ User Limit ) - Allow the channel owner to set members limit over his
                                channel.</b></li>
                            <li><b>( 🧹 ∙ Clear Chat ) - Allow the channel owner clear basic messages, not including
                                embeds.</b></li>
                        </ul>
                        <br/>

                        <ul className="fs-7">
                            <li><b>( 🚫 ∙ Private / 🌐 ∙ Public ) - Allow the channel owner to change the state of
                                channel</b> - ( Can <b>Connect</b>/Cannot <b>Connect</b> )
                            </li>
                            <li><b>( 🙈 ∙ Hidden / 🐵 ∙ Shown ) - Allow the channel owner to change visibility of
                                channel</b> - ( Channel <b>Visible</b>/Channel <b>Hidden</b> )
                            </li>
                            <li><b>( 👥 ∙ Access ) - Allow the channel owner to edit permissions of his channel.</b> -
                                The feature enables 4 menus described below:
                            </li>

                            <ul className="fs-7">
                                <li><b>( 👍 Grant Access ) - Grant access with to user, the user will able to see or
                                    connect the chanel even if the state changed.</b></li>
                                <li><b>( 👎 Remove Access ) - Remove access that described above.</b></li>
                                <li><b>( 🫵 Block User Access ) - Block user access, kicks the user if he inside the
                                    channel - to user cannot connect or see channel anymore.</b></li>
                                <li><b>( 🤙 Un-Block User Access ) - Removes the block that described above.</b></li>
                            </ul>
                        </ul>
                        <br/>

                        <ul className="fs-7">
                            <li><b>( 🔃 ∙ Reset Channel ) - Restore channel's default state</b> -
                                ( <code>Name</code>, <code>User
                                    limit</code>, <code>State</code>, <code>Visibility</code>, <code>Granted
                                    users</code> ).
                            </li>
                            <li><b>( 🔀 ∙ Transfer ownership ) - Allow the channel owner transform ownership over the
                                channel to someone else.</b></li>
                            <li><b>( 😈 ∙ Claim Channel ) - Allow to take over the channel ownership after 10 minutes of
                                owner leaving the channel</b> - Automatically disabled when <b>owner back</b> ).
                            </li>
                        </ul>
                        <br/>

                        <br/>
                        Select the option that suits you the most, then click <b>( Next ▶ )</b> to continue.
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/tBtNfKF/004.png" alt="s7"/>
                    </li>
                    <hr/>
                    <br/>
                    <li>
                        <h3>Step 3</h3>

                        Set verified roles or continue with <b>( <code>default = @everyone</code> recommended! )</b> by
                        pressing <b>( Next ▶ )</b>.
                        <br/>
                        <img className="normalize"
                             src="https://i.ibb.co/DCvxSvG/setup-step-3-verfied-roles-arrow-red-on-select-roles.png"
                             alt="s8"/>
                        <br/>
                        <br/>
                        <li>Select <b>Verified Roles</b></li>
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/cY7NFgS/setup-step-3-trusted-members.png"
                             alt="s8"/>

                        <ul>
                            <li>Do I need to set <b>Verified Roles</b>?</li>
                            <ul>
                                <li>
                                    For most Discord servers, the <code>@everyone</code> role is sufficient. However, there are use cases where you may need additional roles. Here's an example:<br/><br/>
                                    Let's say that by <b>default</b>, new members in your Discord server cannot see any <b>Channels</b>. If the owner of a dynamic channel sets their channel to be visible and <b>Verified Role</b> tagged as <code>@everyone</code>, new members will be able to <b>join/see</b> the channel, which may not be what you intended. This is where the <b>Verified Role selection</b> comes into play.
                                </li>
                                <br />
                                <li><b>Tip:</b> In most cases, one <b>verified role</b> is sufficient, and its recommended to use <code>@everyone</code> role.</li>
                            </ul>
                        </ul>

                        <br/>
                        Press <b>( ✔ Finish )</b> to generate your <b>Master Channel.</b>
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/0FsSRDQ/setup-step-3-finish.png" alt="s8"/>
                        <li>Its done, the <b>Master Channel</b> created!</li>
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/jTqkr0j/setup-finish.png" alt="s9"/>
                        <br/>
                    </li>
                </ul>

                <hr/>
                <br/>

                <ul className="fs-5 ">
                    <li>
                        <h4>Create the dynamic channel</h4>
                        <br/>
                        Join <b>Master Channel (➕ New Channel )</b>
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/Tc1xJ5M/generate-dynamic.png" alt="s10"/>
                        <br/>
                        You will be automatically moved to new <b>Dynamic Channel (Temporary Voice Channel)</b>.
                        <br/>
                        <br/>
                        Open the chat the interface by clicking on the message badge.
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/X8nbPs0/enter-dynamic-chan.png" alt="s11"/>
                        <br/>
                        On the right screen of the window you will see the interface.
                        <br/>
                        <img className="normalize" src="https://i.ibb.co/55xpqZz/101.png" alt="s12"/>
                    </li>
                </ul>

                <hr/>

                <div className="container">
                    <br/>
                    <div aria-live="polite" aria-atomic="true"
                         className="d-flex justify-content-center align-items-center">
                        <div className="toast show w-100" role="alert" aria-live="assertive" aria-atomic="true" data-bs-theme="dark">
                            <div className="toast-header">
                                <img src="https://simgbb.com/avatar/PGKBv5T3fZLJ.png" width="30"
                                     className="rounded-4 me-2"
                                     alt="..."/>
                                <strong className="me-auto">leonid@vertix.gg</strong>
                                <small className="d-flex justify-content-end"><span className="d-none d-sm-block">Updated at&nbsp;</span>21/06/2023</small>
                            </div>
                            <div className="toast-body">
                                Hi there👋<br/><br/>
                                Found something wrong?<br/>
                                Do you have any questions?<br/>
                                Doesn't like something?<br/><br/>
                                <a href="https://discord.com/invite/dEwKeQefUU" target="_blank" rel="noreferrer">Join
                                    our discord server</a> and let us know!
                                or use <code>/help</code> command to send us feedback.<br/><br/>
                                We value your opinion and are eager to take it into consideration!<br/><br/>
                                Best regards ❤️<br/>
                                <b>Vertix Team</b>.
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
            </div>


        </>
    )
}
