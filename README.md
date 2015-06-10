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
To implement more than console logging messages (save to db, trigger other actions) you can override the "messageHandler" function:
```javascript
bc.messageHandler = <your function here>
```