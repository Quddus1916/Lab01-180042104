const hellofunc = require("./helloworld");

console.log(hellofunc.name);

// setInterval
setInterval(() => {
    hellofunc.hello();
}, 1000);

setTimeout(() => {
    console.log(hellofunc.name);
}, 5000);