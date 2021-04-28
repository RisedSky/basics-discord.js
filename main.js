const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'put here your bot prefix';

client.once('ready' , () => {
console.log('online')
});

client.on('message' , message => {
if(!message.content.startWith(prefix) || message.author.bot) return; // this mean if the command does not start with prefix or it was from a bot he will return
})

const args = massage.content.slice(prefix.length)split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'ping'){
massage.channel.send('pong');
}

client.login("put your bot token here");
