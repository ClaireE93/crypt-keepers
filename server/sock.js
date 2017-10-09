const WebSocket = require('ws');

// Real time price updates
// Output: {
//     "type": "ticker",
//     "trade_id": 20153558,
//     "sequence": 3262786978,
//     "time": "2017-09-02T17:05:49.250000Z",
//     "product_id": "BTC-USD",
//     "price": "4388.01000000",
//     "side": "buy", // Taker side
//     "last_size": "0.03000000",
//     "best_bid": "4388",
//     "best_ask": "4388.01"
// }
// TODO: Connect to front
const socket = new WebSocket('wss://ws-feed.gdax.com');
socket.on('open', () => {
  socket.send(JSON.stringify({
    type: 'subscribe',
    product_ids: ['BTC-USD', 'ETH-USD', 'LTC-USD'],
    channels: ['ticker']
  }));
});
socket.on('message', (data) => {
  console.log(data);
});
socket.onerror = (e) => {
  console.error(e.message);
};

module.exports.socket = socket;
