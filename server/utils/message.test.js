const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should create correct message Object', () => {
    const from = "test@example.com";
    const text = "hey";

    const message = generateMessage(from, text);

    expect(message).toMatchObject({from,text});
    expect(message.createdAt).toBeTruthy();
    expect(typeof message.createdAt).toBe('number');


  });
});

describe('generateLocationMessage', () => {
  it('should create correct location object', () => {
    const from = 'Deb';
    const latitude = 15;
    const longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});
