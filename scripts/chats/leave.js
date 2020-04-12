function (context, args) {
  if (!args || !args.channel) {
    return 'chats.leave { channel:"<channel name>" }';
  }

  let out = chat.leave(args.channel, context.caller);
  return out === true ? {ok: true} : {ok: false, msg: out};
}