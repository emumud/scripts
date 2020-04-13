function (context, args) {
  if (!args || !args.channel) {
    return 'chats.users { channel:"<channel name>" }';
  }

  let out = emumudInternals.chat.users(args.channel, context.caller);
  return out === true ? {ok: true} : {ok: false, msg: out};
}