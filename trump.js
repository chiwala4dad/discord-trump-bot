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
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('/data/American-Dream-is-dead.wav');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
