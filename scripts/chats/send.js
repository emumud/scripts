function (context, args) {
  if (!args || !args.channel || !args.msg) {
    return 'chats.send { channel:"<channel name>", msg:"<message (1000/10)>" }';
  }

  let out = emumudInternals.chat.send(args.channel, args.msg, context.caller);
  return out === true ? '`2Msg Sent`' : {ok: false, msg: out};
}