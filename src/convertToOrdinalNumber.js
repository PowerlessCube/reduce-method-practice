const POSITIONS = {
  1: 'st',
  2: 'nd',
  3: 'rd',
};

const convertToOrdinalNumber = (num) => {
  if (!num || num < 0) return num;
  return num % 10 in POSITIONS ? `${num}${POSITIONS[num % 10]}` : `${num}th`;
};

export { convertToOrdinalNumber };
