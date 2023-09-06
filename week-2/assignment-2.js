function calculate(args) {
  const number1 = args.n1
  const number2 = args.n2
  if (args.op === '+') {
    return number1 + number2
  } else if (args.op === '-') {
    return number1 - number2
  } else {
    return 'Not supported'
  }
}