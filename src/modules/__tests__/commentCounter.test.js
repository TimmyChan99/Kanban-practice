import commentCounter from '../commentCounter';
describe('check comment counter', () => {
  test('should return length of comment per event', () => {
    const id = 5;
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

    expect(commentCounter(id, comments)).toBe(5);
  });
});
