function (context, args) {
  if (!args || !args.to) {
    return 'chats.tell { to:"<username>", msg:"<message (1000/10)>" }';
  }

  let out = chat.tell(args.to, args.msg, context.caller);
  return out === true ? '`2Msg Sent`' : {ok: false, msg: out};
}