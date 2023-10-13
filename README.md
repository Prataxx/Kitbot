
# A Kitbot for the Minecraft Server 0b0t.org.


## Authors

[@Pratax](https://discord.com/users/897497942116663317)


## Features

- Simple command handler for easy self-written commands.
- Cooldown system with custom cooldown amount.
- Custom prefix.
- Owner system.


## Running the Bot

Clone or Download the project

```bash
git clone https://github.com/Prataxx/Kitbot
```

Go to the project directory

```bash
cd Kitbot
```

Install dependencies

```bash
npm install
```

Fill out the config.json file

```
  owner    = Your Minecraft Username
  email    = Your Email with Minecraft on the account
  prefix   = Your desired prefix
  cooldown = The Cooldown amount in ms
```

Start the bot

```bash
npm run start
```

**Make Sure that the Bot spawns on top of a pressure plate!**


## Your own command

To create a new command, create a new file inside the commands folder.

Use this Template to code your own command.

```javascript
module.exports = {
  name: "NAME_OF_YOUR_COMMAND",
  execute(bot, args, username) {
      /* YOUR CODE BENEATH */
      /* args = An array of arguments */
      /* username = The Username of the Player that executed the command */
  },
};
```


## Support

Message me on [Discord](https://discord.com/users/897497942116663317)


## License

[MIT](https://choosealicense.com/licenses/mit/)

