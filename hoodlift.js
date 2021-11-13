const timesum = require('/home/user/path/to/timesum.js')
const os = require('os');
const bytes = require('bytes');

const hood = {
    "User": os.userInfo(),
    "Host": os.hostname(),
    "Uptime": timesum,
    "OS": os.type(),
    "Version": os.release(),
    "Architecture": os.arch(),
    "CPU": os.cpus(),
    

    lift () {
        console.log(this);
    }
};

hood.lift();
