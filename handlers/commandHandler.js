const fs = require("fs");

module.exports = () => {
  // Load all .js files out of the commands folder and save them in the commandFiles variable

  const commandFiles = fs
    .readdirSync("./commands")
    .filter((files) => files.endsWith(".js"));

  // Loop through every command and add them to our command collection

  for (file of commandFiles) {
    const command = require(`../commands/${file}`);
    global.commands.set(command.name, command);
  }
};
