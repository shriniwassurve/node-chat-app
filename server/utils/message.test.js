const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should create correct message Object', () => {
    const from = "test@example.com";
    const text = "hey";

    const message = generateMessage(from, text);

    expect(message).toMatchObject({from,text});
    expect(message.createdAt).toBeTruthy();
    expect(typeof message.createdAt).toBe('number');


  })
})
