const SentryCommand = require("../../structures/SentryCommand");
const { stripIndents } = require("common-tags");

module.exports = class NitroCommand extends SentryCommand {
  constructor(client) {
    super(client, {
      name: "nitro",
      aliases: ["discord-nitro", "nitro-message", "nitro-msg"],
      group: "single",
      memberName: "nitro",
      description: "This message can only be viewed by users with Discord Nitro.",
      clientPermissions: ["EMBED_LINKS"]
    });
  }

  exec(msg) {
    const embed = {
      author: {
        name: "Discord Nitro",
        iconURL: "https://cdn.discordapp.com/emojis/314068430611415041.png",
        url: "https://discordapp.com/nitro"
      },
      thumbnail: {
        url: "https://cdn.discordapp.com/emojis/314068430611415041.png"
      },
      color: 0x8395d3,
      timestamp: new Date(),
      description: stripIndents`
			This message can only be viewed by users with Discord Nitro.
			[Lift off with Discord Nitro today](https://discordapp.com/nitro).`
    };
    return msg.embed(embed);
  }
};
