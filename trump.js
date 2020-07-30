const tokenFile = require("./token.js");

const fs = require("fs");
const _ = require("underscore");
const moment = require("moment");
const discord = require('discord.js');

const client = new discord.Client();

// store the filenames of all the audio files for sampling later


client.on("ready", () => {
   console.log("I'm ready!");
});

client.on('message',  message => {

   // if the sent message was "ping" then respond with "pong"
   if (message.content === "ping") {
       message.channel.send("pong");

   // if the sent message was "!trump" then play a random trump quote from our data directory
   } else if (message.content === "!trump") {

       // make sure the user is in a voice channel
       if (message.member.voiceChannel) {

           // join the user's voice channel
         const connection =  message.member.voiceChannel.join()
               .then(connection => {
                 // play the random audio file
                   const dispatcher = connection.playFile('/data/I-like-China.wav');

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on('finish', () => {
                      message.memeber.voicehannel.leave()
                      
                   });
               })
               .catch(console.log);
       }
   }
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
