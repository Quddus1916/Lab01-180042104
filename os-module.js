const os = require("os");


const userinfo = os.userInfo();
console.log(userinfo)


const uptime = os.uptime();
console.log(uptime);

const currentos =
{
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
};
console.log(currentos);