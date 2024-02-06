const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialise object
const myEmitter = new MyEmitter();

// add event listener for log event
myEmitter.on("log", (message) => {
  logEvents(message);
});

setTimeout(() => {
  //Emit event
  myEmitter.emit("log", "Log Event emitted...");
}, 2000);
