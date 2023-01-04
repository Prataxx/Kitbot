module.exports = {
  name: "killDelayed",
  async execute(bot) {
    setTimeout(() => {
      if (global.spam) return;
      bot.chat("/kill");
    }, 5000);
  },
};
