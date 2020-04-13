function (context, args) {
  if (args === '') {
    return `Usage: \`0user\` \`V<username>\`
Your users: \`0emumud\` (1 / 2)
Retired users:  (0 / 5)
(emumud: you can use any user)`;
  }

  emumudInternals.runner.native.changeUser(args);
}