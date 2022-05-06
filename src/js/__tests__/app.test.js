import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../app';

test('Проверка load', () => {
  const data = new ArrayBufferConverter();
  const expected = new Uint16Array(getBuffer());
  data.load(getBuffer());
  expect(data.bufferView).toEqual(expected);
});

test('Проверка возврата строки', () => {
  const data = new ArrayBufferConverter();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  data.load(getBuffer());
  expect(data.toString()).toEqual(expected);
});
