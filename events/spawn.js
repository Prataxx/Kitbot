module.exports = {
  name: "spawn",
  once: true,
  async execute(bot) {
    console.log(
      `Spawned as ${bot.username} on X: ${bot.entity.position.x}, Y: ${bot.entity.position.y}, Z: ${bot.entity.position.z}`
    );

    // Register RegEx Events

    // Move to Talk Event
    bot.chatAddPattern(/^Walk a block to speak in chat..*/, "moveToTalk");

    // Accepted Teleport Event
    bot.chatAddPattern(/^Teleported to (\w*).*/, "acceptedTp");

    // Delayed /kill Command
    bot.chatAddPattern(
      /^&cSorry, Death is too busy at the moment. Please try again later...&r.*/,
      "killDelayed"
    );

    // Sent TPA Event
    bot.chatAddPattern(/^Request sent to: (\w*).*/, "sentTpa");

    // Command Spam Event
    bot.chatAddPattern(
      /^Please wait a bit before using this command again!.*/,
      "spam"
    );

    // Message Spam Event
    bot.chatAddPattern(
      /^Slow down chat or you'll get kicked for spam..*/,
      "spam"
    );

    // Spawn Area Teleport Event
    bot.chatAddPattern(
      /^You are not allowed to teleport while in the spawn area!.*/,
      "spawnArea"
    );

    // Got TP Request Event
    bot.chatAddPattern(/^(\w*) wants to teleport to you..*/, "tpRequest");
  },
};
