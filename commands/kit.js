const util = require("../util");

module.exports = {
  name: "kit",
  execute(bot, args, username) {
    if (util.hasCooldown(username))
      return bot.chat(`/w ${username} You're still on cooldown.`);

    bot.chat(`/tpa ${username}`);
  },
};
