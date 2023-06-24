import ReactMarkdown from 'react-markdown'

const markdown = `
## Changelog

**Version: 0.0.4 ~ 20/06/2023**

- Normalized the 👥 Access menu:
  - Added 🫵  Block user access menu.
  - Added 🤙 Un-Block user access menu.

- Added a new button for the dynamic channel interface:
  - 🔀 Transfer ownership - This button allows you to transfer the channel ownership to another user.
  
---

**Version: 0.0.3 ~ 16/06/2023**

- New Interface for ⚙️ Configure:
    - (∙🟢 On/∙🔴 Off) **Toggle** - Enabling/Disabling owner mention when creating dynamic channel.

- New Interface for 🛡️ Verified roles:
    - (∙🟢 On/∙🔴 Off) **Toggle** - Applies to \`@everyone\` role.
    - Option to select or edit **multiple roles**.
  
   __Explanation__: Changing the state of dynamic channel will affect the verified roles.
   - 🌐 / 🚫 (\`Public/Private\`) - Toggle between the states.
        - 🌐 \`Public\` button - Set \`Connect\` permission to *\`None\`* for -> **🛡️ Verified Roles.**
        - 🚫 \`Private\` button - Set \`Connect\` permission to *\`False\`* for -> **🛡️ Verified Roles.**
    - 🐵 / 🙈 (\`Shown/Hidden\`) - Toggle between the visibility states.
        - 🐵 \`Shown\` button - Set \`ViewChannel\` permission to *\`None\`* for -> **🛡️ Verified Roles.**
        - 🙈 \`Hidden\` button - Set \`ViewChannel\` permission to *\`False\`* for -> **🛡️ Verified Roles.**
---

**Version: 0.0.2 ~ 12/06/2023**

- Fixed issue with disabling the 👥 (\`Access\`) Button:
  - 🙈 **Hidden** mode and 🚫 **Private** mode no longer allow granting privileges.

- Added \`/help\` command with the following options:
    - Report an issue.
    - Suggest an idea.
    - Invite the developer.
    - Community server link.

---

**Version: 0.0.1 ~ 09/06/2023**

- Various tweaks and fixes to enhance the overall user interface of the bot.
- Implemented language management infrastructure.
- Added support for Russian 🇷🇺 language.
- Introduced new user interface option for editing \`dynamic channel buttons\`, that providing two choices:
    - Apply changes immediately - Trigger the change for all active dynamic channels.
    - Save changes - Affect only newly created dynamic channels.

---

**Initial version ~ 03/06/2023**

- Added \`/setup\` command to create _master channel(s)_ aka (＋ **New Channel**) that includes:
    - Dynamic Channels name modification.
    - Dynamic Channels buttons interface modification.
    - Guild level - Badwords modification.

- Added creation of temporary voice channels by entering _master channel(s)_, the dynamic channels include __buttons interface__ that currently supports:
    - ✏️ \`Rename\` button -  Rename channel name.
    - ✋ \`User Limit\` button - Setting the limit of users.
    - 🧹 \`Clear chat\` button - Will clear the chat except embedded messages.
    - 🌐 / 🚫 (\`Public/Private\`) - Toggle between the states.
        - 🌐 \`Public\` button - Set \`Connect\` permission to *None* for \`@everyone\`.
        - 🚫 \`Private\` button - Set \`Connect\` permission to *False* for \`@everyone\`.
    - 👥 \`Access\` button - show drop list with add or remove users option.
    - 🐵 / 🙈 (\`Shown/Hidden\`) - Toggle between the visibility states.
        - 🐵 \`Shown\` button - Set \`ViewChannel\` permission to *None* for \`@everyone\`.
        - 🙈 \`Hidden\` button - Set \`ViewChannel\` permission to *False* for \`@everyone\`.
    - 🔃 \`Reset Channel\` - Return channel to default state.
    - 😈 \`Claim Channel\` - After 10 minutes of dynamic channel owner in-activity will the button will be available, the one who claims the channel will be the new owner.

And more...
`;

export default function Changelog() {
    return (
        <div className="container box-1 changelog" >
            <ReactMarkdown children={ markdown }/>
        </div>
    );
}
