function (context, args) {
  return {
    corruption_chars: '¡¢Á¤Ã¦§¨©ª',
    colors: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    corruptions: [
      0,
      1,
      1.5,
      2.5,
      5
    ],
    security_level_names: [
      'NULLSEC',
      'LOWSEC',
      'MIDSEC',
      'HIGHSEC',
      'FULLSEC'
    ],
    one_day_ms: 86400000,
    math: Math,
    json: JSON
  };
}