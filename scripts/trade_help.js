function (context, args) {
  return `\`0trade_help\`                          [show this message]
\`0trade\` <username>                    [creates or accepts trade requests]
\`0trade_end\`                           [ends an active trade]
\`0trade_accept\`                        [accepts a trade from your side]
\`0trade_unaccept\`                      [recinds a trade acceptance]
\`0trade_bits\` <bit amount>             [sets your offered bits amount]
\`0trade_add\` <upgrade index>           [adds an upgrade to your offers]
\`0trade_rem\` <upgrade trade index>     [removes an offered upgrade from your offers]
\`0trade_up_info\` <upgrade trade index> [shows detailed upgrade information for an offered upgrade]
\`0trade_fee\` <0 or 1>                  [selects which user pays the trade fee]`;
}