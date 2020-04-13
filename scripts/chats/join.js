function (context, args) {
  if (!args || !args.channel) {
    return 'chats.join { channel:"<channel name>", password:"<optional password>" }';
  }

  let out = emumudInternals.chat.join(args.channel, args.password, context.caller);
  return out === true ? {ok: true} : {ok: false, msg: out};
}