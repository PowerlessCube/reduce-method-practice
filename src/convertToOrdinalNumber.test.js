import { convertToOrdinalNumber } from './convertToOrdinalNumber';
const cases = [
  { number: 1, expected: '1st' },
  { number: 2, expected: '2nd' },
  { number: 3, expected: '3rd' },
  { number: 4, expected: '4th' },
  { number: 101, expected: '101st' },
  { number: 999999, expected: '999999th' },
  { number: undefined, expected: undefined },
  { number: null, expected: null },
  { number: 0, expected: 0 },
  { number: -1, expected: -1 },
];
describe('ordinal Number', () => {
  test.each(cases)('$number should be $expected', ({ number, expected }) => {
    expect(convertToOrdinalNumber(number)).toBe(expected);
  });
});
