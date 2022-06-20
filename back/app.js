const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.method === 'GET') {
    if (req.url === '/api/posts') {
      // 응답 코드
    }
  }
  res.write('<h1>hello me1</h1>');
  res.write('hello me2');
  res.write('hello me3');
  res.write('hello me4');
  res.end('Hello node');
});
server.listen(3065, () => {
  console.log("서버 실행 중");
});