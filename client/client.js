const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('config');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.login(config.get('loginKey'));

module.exports = client