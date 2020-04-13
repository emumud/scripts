function (context, args) {
  #D('`0-terminal poweroff-`\n');

  emumudInternals.runner.native.shutdown();

  //setTimeout(function() { process.exit(); }, 5000);
}