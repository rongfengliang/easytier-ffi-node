const fs = require('fs');
const conf = fs.readFileSync('./app.yaml', 'utf8');
const libeasytier =  require("./easytier")
const numPairs = 10;
const KeyValuePairArray = Buffer.alloc(libeasytier.KeyValuePair.size * numPairs);

let result = libeasytier.run_network_instance(conf);
if (result === 0) {
  console.log('Network instance started successfully.');
  while (true) {
    const outputMessage = async () => {
      console.log('Network instance is running...');
      const result = libeasytier.collect_network_infos(KeyValuePairArray, numPairs);
      console.log(`Collected ${result} key-value pairs:`);
      if (result  > 0) {
        for (let i = 0; i < result; i++) {
          const offset = i * libeasytier.KeyValuePair.size;
          const pair = libeasytier.KeyValuePair.get(KeyValuePairArray, offset);
          console.log(`key: ${pair.key}, value: ${pair.value}`);
        }
      }
    };
    outputMessage().then(() => {
       console.log('Output completed successfully.');
    }).catch(err => {
      console.error('Error during output:', err);
    });
  }
}
