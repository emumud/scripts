function (context, args) {
  return `To run a script, type the name of the script and press enter.
Common scripts:
  scripts.trust      [see a list of all scripts provided by the Trust]
  scripts.fullsec    [see a list of all public FULLSEC scripts]
  accts.balance      [see your acct balance]
  accts.xfer_gc_to   [send GC to another user]

Special shell commands:
  \`0help\`                 [see this again]
  \`0user\`                 [change users]
  \`0create_user\`          [create a user]
  \`0retire_user\`          [retire a user and free up a slot !NO CONFIRMATION!]
  \`0clear\`                [clear the window]
  \`0shutdown\`             [disconnect from terminal]
  \`0chat_pass\`            [provides one time pass for chat app connection]
  \`0chat_revoke_tokens\`   [revokes chat api tokens]
  \`0store_list\`           [opens the store]
  \`0#help\`                [architect command help]`;
}