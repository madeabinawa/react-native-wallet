export const cardNumberFormat = (cardNumber: string) => {
  const plain = cardNumber.split('').reduce((acc, digit, index) => {
    return index % 4 === 0 ? acc + ' ' + digit : acc + digit;
  });

  const obscured = `**** **** ${cardNumber.slice(-4)}`;

  return {plain, obscured};
};
