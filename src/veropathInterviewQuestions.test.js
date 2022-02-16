import { reverseAlphaCount } from './veropathInterviewQuestions';

const cases = [
  { letters: ['a', 'b', 'c'], expected: 'A1C, B2B, C3A' },
  {
    letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
    expected: 'A1K, B2J, C3I, D4H, E5G, F6F, G7E, H8D, I9C, J10B, K11A',
  },
  {
    letters: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ],
    expected:
      'A1Z, B2Y, C3X, D4W, E5V, F6U, G7T, H8S, I9R, J10Q, K11P, L12O, M13N, N14M, O15L, P16K, Q17J, R18I, S19H, T20G, U21F, V22E, W23D, X24C, Y25B, Z26A',
  },
  { letters: [null], expected: 'NULL1NULL' },
  { letters: [null, 'a', 'b', 'c'], expected: 'NULL1C, A2B, B3A, C4NULL' },
  { letters: ['a', '1', 'c'], expected: 'A1C, 121, C3A' },
  { letters: [undefined, null], expected: 'UNDEFINED1NULL, NULL2UNDEFINED' },
  { letters: null, expected: '' },
  { letters: undefined, expected: '' },
  { letters: '', expected: '' },
];

describe('Veropath Interview Practice', () => {
  test.each(cases)(
    'reverseAlphaCount function when given $letters returns the following $expected',
    ({ letters, expected }) =>
      expect(reverseAlphaCount(letters)).toEqual(expected)
  );
});
