function (context, args) {
  #D(#fs.emumud.return({key: 'value'}));
  #D(#fs.emumud.ok({ok: true, msg: 'Hello, subscript!'}));
  #D(#fs.emumud.corrupt({todo: 'Hello, subscript!'}));

  return {ok: true};
}