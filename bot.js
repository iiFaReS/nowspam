const Discord = require('discord.js');
const client = new Discord.Client();
console.log("By al7midy");


client.on("ready", () => {
let channel =     client.channels.get("515120221099393037")
setInterval(function() {
channel.send(`bY 7midy`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
