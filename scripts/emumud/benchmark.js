function (context, args) {
  const amount = args && args.amount || 100;

  let times = [];

  #D(`Benchmarking - Loading scripts ${amount} times...`);

  for (let i = 0; i < amount; i++) {
    transpiler.loadScripts(true).then((t) => {
      #D(t);
      times.push(t);
    });

    /*const time = transpiler.loadScripts(true);
    //#D(`${i}: ${time}ms`);

    times.push(time);*/
  }

  let sum = times.reduce((a, b) => a + b);
  let avg = sum / amount;

  #D(`\nSum of times: ${sum}ms`);
  #D(`Average: ${avg}ms`);

  #D(`\nBenchmarking - Logging messages ${amount} times...`);

  for (let i = 0; i < amount; i++) {
    const startTime = new Date();

    #D('\x1B[1A\r' + i);

    const time = new Date() - startTime;
    //#D(`${i}: ${time}ms`);

    times.push(time);
  }

  sum = times.reduce((a, b) => a + b);
  avg = sum / amount;

  #D(`\nSum of times: ${sum}ms`);
  #D(`Average: ${avg}ms`);
}