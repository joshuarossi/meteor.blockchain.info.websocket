Blockchain = function(){
  var _this = this;
	this.url = 'wss://ws.blockchain.info/inv';
	this.address_list = [];
  this.WebSocketClient = Npm.require('websocket').client;
  this.client = new this.WebSocketClient();
  this.subscribeAllTransactions = function(){
    this.subscribeToAll = true;
    var message = JSON.stringify({"op":"unconfirmed_sub"});
    if (this.client.connection.connected) {
      this.client.connection.sendUTF(message);
    }
  };
  this.subscribeToAddressList = function () {
    this.address_list.forEach(function(address){
      var message = JSON.stringify({"op":"addr_sub", "addr":address});
      if (_this.client.connection.connected) {
        _this.client.connection.sendUTF(message);
      }
    });
  };
  this.addNewAddressSubscription = function(address){
    this.address_list.push(address);
    var message = JSON.stringify({"op":"addr_sub", "addr":address});
    if (this.client.connection.connected) {
        this.client.connection.sendUTF(message);
    }
  };
  this.subscribe = function(){
    if(this.subscribeToAll == true){
      this.subscribeAllTransactions();
    } else {
      this.subscribeToAddressList();
    }
  };
  this.messageHandler = function(message){
    if (message.type === 'utf8') {
      console.log("> "+ message.utf8Data);
    }
  };
  this.client.on('connectFailed', function(error) {
      console.log('Connect Error: ' + error.toString());
  });
  this.client.on('connect', function(connection) {
      this.connection = connection;
      _this.subscribe();
      console.log('WebSocket Client Connected');
      connection.on('error', function(error) {
          console.log("Connection Error: " + error.toString());
      });
      connection.on('close', function() {
          console.log('echo-protocol Connection Closed');
          _this.connect('wss://ws.blockchain.info/inv');
      });
      connection.on('message', function(message) {
          _this.messageHandler(message);
      });
  });
  this.connect = function (){
    this.client.connect(this.url)
    };
  this.testBlock = function (){
    var message = JSON.stringify({"op":"ping_block"});
    if (this.client.connection.connected) {
        this.client.connection.sendUTF(message);
    }
  };
  this.testTransaction = function (){
    var message = JSON.stringify({"op":"ping_tx"});
    if (this.client.connection.connected) {
        this.client.connection.sendUTF(message);
    }
  };
};