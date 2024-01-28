const os = require('os')
function osm(){
console.log(os.freemem())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.uptime())
console.log(os.userInfo())
console.log(os.version())
console.log(os.networkInterfaces())
}
module.exports = osm;