const config = require("../config.json");

module.exports = {
  name: "tpRequest",
  async execute(bot, username) {
    if (username != config.owner) return;
    bot.chat(`/tpy ${username}`);
  },
};
