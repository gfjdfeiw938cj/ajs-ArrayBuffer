export default class ArrayBufferConverter {
  constructor() {
    this.bufferView = undefined;
  }

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    let result = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      result += String.fromCharCode(this.bufferView[i]);
    }
    return result;
  }
}
