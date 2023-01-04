module.exports = {
  name: "moveToTalk",
  async execute(bot) {
    console.log(`Moving to talk..`);
    bot.setControlState("forward", true);
    setTimeout(() => {
      bot.setControlState("forward", false);
      bot.setControlState("left", true);
      setTimeout(() => {
        bot.setControlState("left", false);
        setTimeout(() => {
          bot.setControlState("right", true);
          setTimeout(() => {
            bot.setControlState("right", false);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  },
};
