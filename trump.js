const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.on('message', message => {
	if (message.content === 'hi cheemz') {
		message.reply('hemblo')
	}
	else if (message.content === 'cheemz commands') {
		message.reply('hemblo welcome to Cheemz bot. \n The prefix is "!ch" and this is the sound list. \n pizza \n ay yo \n oh yo \n nani \n yes \n doing tho \n what \n cut ')
	}
	else if (message.content === 'yes') {
		message.reply('https://i.kym-cdn.com/photos/images/newsfeed/001/650/747/aaf.png ')
	}
	else if (message.content === '!ch ay yo') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('ay yo.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
		else if (message.content === '!ch oh yo') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('oh yo.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
	else if (message.content === '!ch nani') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('nani.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
	else if (message.content === '!ch yes') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('yes yes.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
		else if (message.content === '!ch pizza') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('pizza.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
	else if (message.content === '!ch doing tho') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('doing tho.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
	else if (message.content === '!ch cut') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('cut g.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
	else if (message.content === 'bruh') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=dmNg_pHUmdI', { filter: 'audioonly' });
			//const dispatcher = connection.play('cut g.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
	else if (message.content === '!ch what') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			//const stream = ytdl('https://www.youtube.com/watch?v=kLaaJ_aeoyM', { filter: 'audioonly' });
			const dispatcher = connection.play('what.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
