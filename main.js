// install this package in your terminal `npm i discord.js`
const Discord = require('discord.js'); 

const client = new Discord.Client();

// your bot prefix
const prefix = '';

client.once('ready' , () => {
console.log('online')
})

// check if the command does not start with prefix or it was from a Bot
client.on('message' , message => {
if(!message.content.startWith(prefix) || message.author.bot) return; 
})

const args = massage.content.slice(prefix.length)split(/ +/);
const command = args.shift().toLowerCase();

// create a command
if (command === 'ping'){
massage.channel.send('pong');
} 

// your bot token 
client.login("");
