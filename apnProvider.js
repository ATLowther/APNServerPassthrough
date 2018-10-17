const apn = require("apn");
const apnCred = require("./apnCredentials");

const options = {
  ...apnCred
};

const apnProvider = new apn.Provider(options);

module.exports = apnProvider;
