/**
 * @jest-environment jsdom
 */

import likesCounter from '../likesCounter.js';

const items = [
  {
    item_id: '0',
    likes: 10,
  },

  {
    item_id: '1',
    likes: 5,
  },
];

document.body.innerHTML = `<span class="number_of_likes">${items[1].likes}</span>`;
const span = document.querySelector('.number_of_likes');

describe('Test the number of likes', () => {
  test('Test the first item in array', () => {
    likesCounter(items, 1, span);
    expect(items[1].likes).toBe(6);
  });

  test('Test the second item in array', () => {
    likesCounter(items, 0, span);
    expect(items[0].likes).toBe(11);
  });
});

test('Test the like inside of span', () => {
  likesCounter(items, 1, span);
  expect(span.innerHTML).toBe('7');
});
