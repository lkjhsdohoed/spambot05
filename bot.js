const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569582608057630737")
setInterval(function() {
channel.send(`spain spain spain spain `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
