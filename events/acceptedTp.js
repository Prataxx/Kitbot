const util = require("../util");
const config = require("../config.json");

module.exports = {
  name: "acceptedTp",
  async execute(bot, username) {
    console.log(`TPed to ${username}, killing..`);
    setTimeout(async () => {
      bot.chat("/kill");
      global.cooldowns.push(username);
      setTimeout(() => {
        util.removeCooldown(username);
      }, config.cooldown);
    });
  },
};
