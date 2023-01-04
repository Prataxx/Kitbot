module.exports = {
  name: "respawn",
  async execute(bot) {
    setTimeout(async () => {
      bot.setControlState("forward", true);
      setTimeout(() => {
        bot.setControlState("forward", false);
      }, 500);
    }, 1000);
  },
};
