// Write a function that returns a Boolean if the passed in string starts with an uppercase letter A-Z

// Write a function that adds up all that values in our array of numbers

// Write a function that determines the area of a circle given the radius

// Write a function that gives the output of "A1Z, B2Y, C3X... etc. Z26A" given the following array:
export const reverseAlphaCount = (letters) => {
  if (letters === null || letters === undefined || letters === '') return '';

  return letters
    .reduce((curr, letter, index, array) => {
      const number = index + 1;
      const firstLetter = String(letter).toUpperCase();
      const lastLetter = String(array[array.length - number]).toUpperCase();
      const formattedLetter = `${firstLetter}${number}${lastLetter}`;
      curr.push(formattedLetter);
      return curr;
    }, [])
    .join(', ');
};
