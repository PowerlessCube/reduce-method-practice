import { convertToOrdinalNumber } from './convertToOrdinalNumber';

describe('ordinal Number', () => {
  test('1 should be 1st', () => {
    expect(convertToOrdinalNumber(1)).toBe('1st');
  });

  test('2 should be 2nd', () => {
    expect(convertToOrdinalNumber(2)).toBe('2nd');
  });

  test('3 should be 3rd', () => {
    expect(convertToOrdinalNumber(3)).toBe('3rd');
  });

  test('4 should be 4th', () => {
    expect(convertToOrdinalNumber(4)).toBe('4th');
  });

  test('101 should be 101st', () => {
    expect(convertToOrdinalNumber(101)).toBe('101st');
  });

  test('undefined should return undefined', () => {
    expect(convertToOrdinalNumber(undefined)).toBe(undefined);
  });

  test('null should return null', () => {
    expect(convertToOrdinalNumber(null)).toBe(null);
  });

  test('0 should return 0', () => {
    expect(convertToOrdinalNumber(0)).toBe(0);
  });

  test('-1 should return -1', () => {
    expect(convertToOrdinalNumber(-1)).toBe(-1);
  });
});
