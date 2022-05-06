export default function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    bufferView.forEach((el,ind) => { 
      bufferView[ind] = input.charCodeAt(ind)
    });
    return buffer;
  })(data);
}

