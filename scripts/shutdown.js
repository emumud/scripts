function (context, args) {
  #D('`0-terminal poweroff-`\n');

  transpiler.native.shutdown();

  //setTimeout(function() { process.exit(); }, 5000);
}