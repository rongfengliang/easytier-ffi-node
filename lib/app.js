const fs = require('fs');
const conf = fs.readFileSync('./app.yaml', 'utf8');
const libeasytier =  require("./easytier")
let result = libeasytier.run_network_instance(conf);
if (result === 0) {
  console.log('Network instance started successfully.');
  while (true) {
  }
}
