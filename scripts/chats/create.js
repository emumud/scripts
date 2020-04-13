function (context, args) {
  if (!args || !args.channel) {
    return 'chats.create { channel:"<channel name> (50/1)", password:"<optional password>" }';
  }

  let out = emumudInternals.chat.create(args.channel, args.password, context.caller);
  return out === true ? {ok: true} : {ok: false, msg: out};
}