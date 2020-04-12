function (context, args) {
  if (args && args.dc === true) {
    hardline.off();

    return '\n`0-hardline disconnected-`';
  }

  if (!hardline.status()) {
    hardline.on();

    return '`0-activating hardline-`\n\n\n`D-hardline active-`';
  }

  return {
    ok: false,
    remaining: hardline.time(),
    msg: ':::TRUST COMMUNICATION::: hardline is already active. Add { dc: true } to disconnect'
  };
}