const { readdirSync } = require("fs");

module.exports = (bot) => {
  // Load all .js files out of the events folder and save them in the eventFiles variable

  const eventFiles = readdirSync(`./events`).filter((files) =>
    files.endsWith(".js")
  );

  // Loop through every event and register them as events in our bot

  for (const file of eventFiles) {
    const event = require(`../events/${file}`);
    if (event.once) {
      bot.once(event.name, (...args) => event.execute(bot, ...args));
    } else bot.on(event.name, (...args) => event.execute(bot, ...args));
  }
};
