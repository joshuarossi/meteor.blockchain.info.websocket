## Synopsis

This is a simple wrapper for the Blockchain.info Websocket API. The goal is to make a super simple way for Meteor apps to listen to transaction info from the Bitcoin Blockchain.

## Installation
```
meteor add mjr:blockchain-websockets

```

# Quick Start
Create some routes in a client/server JavaScript file:
First you will create a new instance of the Blockchain object:
```javascript
bc = new Blockchain()
```
Then you will connect to the websocket feed:
```javascript
bc.connect()
```
Now you can subscribe to transaction involving a given Bitcoin address:
```javascript
bc.addNewAddressSubscription(<bitcoin_address>)
```
Or you could subscribe to ALL transactions:
```javascript
bc.subscribeAllTransactions()
```
If you have trouble, you can open up a meteor shell, and use the following to debug your connection:
```javascript
bc.testTransaction()
```
To implement more than console logging messages (save to db, trigger other actions) you can override the "messageHandler" function, here is the current code:
```javascript
bc.messageHandler = function(message){
    if (message.type === 'utf8') {
      console.log("> "+ message.utf8Data);
    }
  };
```
Here is an example transaction object:
```javascript
{
"op":"utx",
"x":{
   "lock_time":0,
   "ver":1,
   "size":225,
   "inputs":[
      {
         "sequence":4294967295,
         "prev_out":{
            "spent":true,
            "tx_index":89879750,
            "type":0,
            "addr":"1Bp3FC6FD5QSX7d3shMGFJkKZfefZxaz9Z",
            "value":446292000,
            "n":1,
            "script":"76a9147696ae8aa64ef078199fbff413c9c15dfafa4da788ac"
         },
         "script":"473044022013b3d20efe024f74e2e57c5722e8de7302c061fe41517452764d0260972dd328022045902e1f574c36952a39a34bb90810e43dfbaad17cda27f78a0c540de79c7255012103ec1b41016b3ac94430573f55c2797d412d7169b5096402fe9317a93e852c5bdf"
      }
   ],
   "time":1433970007,
   "tx_index":89880810,
   "vin_sz":1,
   "hash":"b29a33468ca2ddbe03eb2f9e7eda21556fac62efe1309f93fd41e99172eb3f83",
   "vout_sz":2,
   "relayed_by":"212.71.238.204",
   "out":[
      {
         "spent":false,
         "tx_index":89880810,
         "type":0,
         "addr":"1BnSkJeb5hfbPhreKpPo95xUtoUBuq3zsZ",
         "value":5734000,
         "n":0,
         "script":"76a914764977e3bf32627ec99dbf7c80f2beb8b883258688ac"
      },
      {
         "spent":false,
         "tx_index":89880810,
         "type":0,
         "addr":"12Mu3QvHgrRH6dte7rAmh3GowebedAfyCS",
         "value":440548000,
         "n":1,
         "script":"76a9140eebe31c80517cdb2652a6fdfd4e369aff4ef93188ac"
      }
   ]
}
}
