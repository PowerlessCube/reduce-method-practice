import {
  arraySquared,
  groupByAge,
  iceCreamTotals,
  studentsWhoPassedWithGrace,
  sumAllPositiveNumbers,
  useArrayMediaAndMeanValues,
  nameInitials,
} from './reducePractice';

describe('Reducer Practice', () => {
  test('students who passed with +15 grace added to mark', () => {
    expect(studentsWhoPassedWithGrace).toEqual(233);
  });

  test('groupedByAge groups persons by age in an object', () => {
    expect(groupByAge).toEqual({
      26: ['Kyle'],
      31: ['John'],
      42: ['Sally', 'Jill'],
    });
  });

  test("iceCreamTotals returns an object with a count each icecream flavour as it's property", () => {
    expect(iceCreamTotals).toEqual({
      Banana: 1,
      Chocolate: 5,
      'Cookies & Cream': 2,
      'French Vanilla': 1,
      'Mint Chocolate Chip': 3,
      Pistachio: 1,
      'Rocky Road': 1,
      Strawberry: 3,
      Vanilla: 4,
      'Vanilla Bean': 1,
    });
  });

  test('arraySquared squares each number to the power 2', () => {
    const data = [1, 2, 3, 4, 5];
    const result = [1, 4, 9, 16, 25];
    expect(arraySquared(data)).toEqual(result);
  });

  test('sumAllPositiveNumbers', () => {
    const data = [1, -4, 12, 0, -3, 29, -150];
    const result = 42;
    expect(sumAllPositiveNumbers(data)).toEqual(result);
  });

  test('Calculate median and mean', () => {
    const data = [12, 46, 32, 64];
    const result = { mean: 38.5, median: 32 };
    expect(useArrayMediaAndMeanValues(data)).toEqual(result);
  });

  test('Get name initials', () => {
    const input = 'George Raymond Richard Martin';
    const result = 'GRRM';
    expect(nameInitials(input)).toBe(result);
  });
});
