const config = require("../config.json");

module.exports = {
  name: "message",
  async execute(bot, messageJson) {
    if (messageJson.toString() == "")
      return console.log(messageJson.toString());
  },
};
