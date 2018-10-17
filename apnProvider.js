const apn = require("apn");
const apnCred = require("./apnCredentials");

const options = {
  ...apnCred
};

console.log(options);

const apnProvider = new apn.Provider(options);

module.exports = apnProvider;
