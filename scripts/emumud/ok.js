function (context, args) {
  if (args === null || args.ok === undefined) {
    return `Usage: emumud.ok {ok: true|false \`0[, msg: <optional message>]\`}
[*] = optional`;
  }

  return args.msg !== undefined ? {ok: args.ok, msg: args.msg} : {ok: args.ok};
}