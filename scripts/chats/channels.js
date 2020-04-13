function (context, args) {
  let out = emumudInternals.chat.channels(context.caller);

  return out === true ? {ok: true} : {ok: false, msg: out};
}