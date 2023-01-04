module.exports = {
  name: "login",
  once: true,
  async execute(bot) {
    console.log(`Logged in as ${bot.username}`);
  },
};
