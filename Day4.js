// Event loop simulation, Essentially a producer/consumer model
var eventQueue = [];

function simulation() {
    let event;

    if (eventQueue.length !== 0) {
        event = eventQueue.shift(); // eval queue in front
        switch (event.type) {
            case 'success' :
                event.success(event.args);
                break;
            case 'error':
                event.fail(event.args);
                break;
            default:
                break;
        }
    }
}

function eventProducer(eventQueue) {
    // simulate produce event

    eventQueue.push({
        type: "success",
        success: function (args) {
            console.log('success business logicial ' + args);
        },
        fail: function (args) {
            console.log('fail business logicial' + args)
        },
        args: "any args"
    });
}

// Analog generates one event per second for the observer
setInterval(eventProducer, 1000, eventQueue);

// Analog event loop polling
setInterval(simulation, 1000);