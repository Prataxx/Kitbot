const config = require("../config.json");

module.exports = {
  name: "chat",
  async execute(bot, username, message) {
    if (global.spam) return;
    if (message.startsWith(config.prefix)) {
      const args = message.slice(config.prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
      const command =
        global.commands.get(commandName) ||
        global.commands.find(
          (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );
      if (command) {
        try {
          command.execute(bot, args, username);
        } catch (err) {
          console.log(err);
          bot.chat("< Error while running command " + command.name + "!");
        }
      }
    }
  },
};
