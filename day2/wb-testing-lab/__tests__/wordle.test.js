import { buildLetter } from "../src/wordle.js"

// describe('building a letter object', () => {
//     test('returns a letter object', () => {
//         const letter = buildLetter('A', 'PRESENT')
//         expect(letter).toEqual({ letter: 'A', status: 'PRESENT'})
//     })
// })

describe('building a letter object', () => {
    test('returns a letter object', () => {
      const letter = buildLetter('A', 'PRESENT');
      expect(letter).toEqual({ letter: 'A', status: 'PRESENT' });
    });
  });