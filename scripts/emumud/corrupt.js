function(context, args) {
  if (args === null || args.todo === undefined) {
    return `Usage: emumud.corrupt {todo: "string to corrupt"\`0[, amount:<optional percent to decrease>]\`}
[*] = optional`;
  }

  let todo = args.todo;

  let amount = args.amount ? args.amount : 90;
  amount = amount <= 1 ? amount : amount / 100;

  let chars = #fs.scripts.lib().corruption_chars.split('');

  for (let i = 0; i < todo.length; i++) {
    if (Math.random() > amount) {
      todo = todo.replace(todo[i], chars[Math.floor(Math.random() * chars.length)]);
    }
  }

  return todo;
}
