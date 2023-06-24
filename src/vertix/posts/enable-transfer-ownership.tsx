export default function EnableTransferOwnership() {
    return (
        <div className="container box-1">
            <h5>Enabling Dynamic Channel - (<code>🔀 Transfer Ownership</code>) Button</h5>
            <br />
            <p className="fs-5">Since <b>Version</b> <code>0.0.4</code> we added <b>Transfer Ownership</b> button for dynamic channel interface.</p>
            <p className="fs-5">If you are already exist <u>Bot User</u> the button will be disabled by default, here are the steps you can take to enable it:</p>

            <ol className="fs-5">
                <li>
                    Enter your discord server and type <code>/setup</code> in any channel.
                    <br />
                    <img className="normalize" src="https://i.ibb.co/LYkTJyh/e1.png" alt="e1" />
                </li>
                <br />
                <li>
                    Select <b>Master Channel</b> you want to enable the button in.
                    <br />
                    <img className="normalize" src="https://i.ibb.co/McKVkXr/e2.png" alt="e2" />
                </li>
                <br />
                <li>
                    Select <b>Edit Channel's Button</b> option.
                    <br />
                    <img className="normalize" src="https://i.ibb.co/ykC9sb5/e3.png" alt="e3" />
                </li>
                <br />
                <li>
                    Click on <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg> down arrow.
                    <br />
                    <img className="normalize" src="https://i.ibb.co/DzScDvz/e4.png" alt="e4" />
                </li>
                <br />
                <li>
                    Select the <b>🔀 Transfer Ownership</b> option, then press <b>done</b> button.
                    <br />
                    <img className="normalize" src="https://i.ibb.co/fn9Bsq2/e5.png" alt="e5" />
                </li>
                <br />
                <li>
                    At this point, you have two options:
                    <ul>
                        <li>Enable it for all dynamic channels (including newly created).</li>
                        <li>Enable it only for newly created dynamic channels.</li>
                    </ul>
                    <br />
                    Select the option that suits you the most.
                    <br />
                    <img className="normalize" src="https://i.ibb.co/FJzvvPH/e6.png" alt="e6" />
                    <br />
                    That's all! Now your members can transfer ownership of dynamic channels.
                </li>
            </ol>

            <br />
            <p>Updated at: 21/06/2023</p>
        </div>
    )
}
