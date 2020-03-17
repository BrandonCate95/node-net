const McProxy = require('minecraft-proxy');

let localServerOptions = {
  'port': '5000',
  'version': '1.7.10',
  'online-mode': true,
  'motd': 'nodejs minecraft proxy'
}

let serverList = {
  hub: {
    host: '35.243.192.227',
    port: 25565,
    isDefault: true,
    isFallback: true
  }
}

// if you leave proxyOptions empty yo may as well not pass it in the arguments, I wrote it anyway to point out that it exist
let proxyOptions = {}

/*
  Use the "/server <serverName>" command in chat to move between servers.
  <serverName> is the name that you chose for the server inside the serverList
  This command is implemented by /src/Plugins/ChatCommands.js and it can be disabled by setting enablePlugin: false inside proxyOptions
*/
let proxy = McProxy.createProxy(localServerOptions, serverList, proxyOptions);

proxy.on('error', console.error);

proxy.on('listening', () => {
  console.info('Listening!');
});