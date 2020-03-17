var net = require('net');

// The servers we will proxy to
const upstream = { address: '35.243.192.227', port: '25565' };

// Create the proxy server
net.createServer(function (socket) {

    socket.on('data', function(data){
        net.connect(upstream.port, upstream.address, function(connection){
            console.log(data)
            this.write(data);
        });
    })

}).listen(5000, function(){
    console.log("Ready to proxy data");
});

// Create the upstream servers
net.createServer(function (socket) {
    socket.on('data', function(data){
        console.log("Received some data on " + upstream.address + ":" + upstream.port);
        console.log(data);
    });
}).listen(upstream.port, function(){
    console.log("Upstream configured")
})