const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.on('message', message => {
	if (message.content === '!play') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
