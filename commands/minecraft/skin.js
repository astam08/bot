const { Command } = require('discord.js-commando');

module.exports = class SkinCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'skin',
			group: 'minecraft',
			memberName: 'skin',
			description: 'Get the skin of a Minecraft user',
			aliases: ['minecraft-skin', 'mc-skin'],
			examples: ['face Notch'],
			throttling: {
				usages: 1,
				duration: 15
			},
			args: [{
				key: 'username',
				prompt: 'What user do you want to look up?',
				type: 'string'
			}]
		});
	}

	run(msg, { username }) {
		return msg.reply({
			embed: {
				author: {
					name: username,
					icon_url: `https://minotar.net/helm/${username}`
				},
				image: { url: `https://minotar.net/skin/${username}` }
			}
		});
	}
};
