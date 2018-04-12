var http=require('http');
var server=http.createServer(function (request,response) {

});
server.listen(8080,function (error) {
    console.log('成功开启服务器');
})