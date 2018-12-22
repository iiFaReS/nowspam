const Discord = require('discord.js');
const client = new Discord.Client();
console.log("By al7midy");
const ownerid = '518024839953645588';

client.on("ready", () => {
let channel =     client.channels.get("515120221099393037")
setInterval(function() {
channel.send(`bY 7midy`);
}, 30)
})


client.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});




client.login(process.env.BOT_TOKEN);
