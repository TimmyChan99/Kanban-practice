/**
 * @jest-environment jsdom
 */

import commentCounter from '../commentCounter';
const id = Math.random().toString(36).slice(2);
const item_id = id;
const comments = [
  {
    comment: 'testnet ',
    username: 'Ola',
    creation_date: '2022-02-02',
  },
  {
    username: 'WooopY_Kid',
    comment: 'anonymous',
    creation_date: '2022-02-02',
  },
  {
    creation_date: '2022-02-02',
    username: 'WooopY_Kid',
    comment: "I'm weird",
  },
  {
    username: 'Fatima',
    comment: 'Hello there!!',
    creation_date: '2022-02-02',
  },
  {
    comment: 'khiugukfyufk',
    username: 'Fatima',
    creation_date: '2022-02-03',
  },
];

const comment_2 = [];

document.body.innerHTML = `<h2 class="comment-header">${commentCounter(item_id, comments)}</h2>`;
const h2 = document.querySelector('.comment-header');

describe('check comment counter', () => {
  test('should return length of comment per event', () => {
    expect(commentCounter(item_id, comments)).toBe(5);
  });

  test('should return counter length in header', () => {
    commentCounter(item_id, comments);
    expect(h2.innerHTML).toBe('5');
  });

  test('should return zero', () => {
    expect(commentCounter(item_id, comment_2)).toBe(0);
  });
});
