// Imports of the required modules.

const mineflayer = require("mineflayer");
const config = require("./config.json");
const discord = require("@discordjs/collection");

// Config Validation

if (!config.owner)
  console.log("No Owner name provided, continuing without it!");

if (!config.email) {
  console.log("No Email provided, exiting..");
  process.exit(1);
}

if (!config.prefix) {
  console.log("No Prefix provided, continuing with the default..");
  config.prefix = "!";
}

if (!config.cooldown) {
  console.log("No Cooldown amount provided, continuing with the default..");
  config.cooldown = 10000;
}

// Configuration for the Bot.

const options = {
  host: "0b0t.org", // The server we want to connect to.
  auth: "microsoft", // The auth server we want to use.
  version: "1.12.2", // The Version the Minecraft Server will use.
  username: config.email, // Your microsoft account email, this account has to own minecraft.
};

// Creation of the Bot.

var bot = mineflayer.createBot(options);

// Initialization of required variables.

global.commands = new discord.Collection();
global.spam = false;
global.cooldowns = [];

// Binding for the Events and Commands.

bind(bot);

require("./handlers/commandHandler")(bot);

// Bind Events function

function bind(bot) {
  // Register Events that require the Bot to restart.

  bot.on("error", (error) => restart(`Error: ${error.message}`));
  bot.on("kicked", (reason) => restart(`Kicked: ${reason}`));
  bot.on("end", (reason) => restart(`Exited: ${reason}`));

  // Register the Events.

  require("./handlers/eventHandler")(bot);
}

// Restart Function

function restart(message) {
  console.log(message);

  setTimeout(() => {
    bot = mineflayer.createBot(options);
    bind(bot);
  }, 5000);
}
