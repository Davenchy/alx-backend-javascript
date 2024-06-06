const calculateNumber = (a, b, type) => {
  a = Math.round(a), b = Math.round(b);

  switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return b - a;
    case 'DIVIDE':
      return b === 0 ? 'Error' : a / b;
    default:
      break;
  }
};

module.exports = calculateNumber;
