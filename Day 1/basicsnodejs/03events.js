// Step 1: standard events module provided by node
const events = require('events');
// Step 2: use the modules to create a object of a class
var shekhar = new events.EventEmitter();

// Step 3: register an event to my Object
shekhar.on("speak", function() {
    console.log("Shekhar is speaking.");
});
shekhar.on("teach", () => {
    console.log("Shekhar is teaching.");
});
shekhar.on("dance", () => {
    console.log("Shekhar is dancing.");
});

// Step 4: fire the event
shekhar.emit('speak');
shekhar.emit('dance');


shekhar.once('jump', () => {
    console.log("Shekhar is jumping.");
});
shekhar.emit('dance');
shekhar.emit('jump');
shekhar.emit('jump');
shekhar.emit('jump');