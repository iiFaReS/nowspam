/*const Discord = require('discord.js');
const myDiscriminator = ["8888", "0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "9999"];//حطا التاق هنا
const bot = new(require("discord.js")).Client({fetchAllMembers: true});
const password = "055747";
const token = "NTU3NzE5NjAxMjQ5Nzc5NzE0.D3VKcg.-2D4yBBF17S_pQAmM9BBwsCQylg"; 
bot.on('ready', () => {
  console.log(`شغآال بواسطه ,, الحـميْديْ .#3919`);
});
bot.login(token);
function changeDiscriminator() {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    console.log(Date.now(), "Username Loaded: " + us);
    bot.user.setUsername(us, password).then((u) => {
      console.log(Date.now(), "Username: " + u.username, "Discriminator: " + u.discriminator);
      setTimeout(changeDiscriminator, 8640 * 10000);
    }).catch((err) => {
      console.log(Date.now(), "An error occurred. Trying again in sixty (60) seconds.");
      setTimeout(changeDiscriminator, 60 * 1e3);
    });
  } catch(e) {
    console.log(Date.now(), `[${e}] Trying again in 30 seconds.`);
    setTimeout(changeDiscriminator, 30 * 1e3);
  }
}

bot.once("ready", () => {
  console.log(Date.now(), "Started with " + bot.users.size + " users.");
  changeDiscriminator();
  if(myDiscriminator.includes(bot.user.discriminator)) {
      console.log(`I successfully got the discrim ${bot.user.discriminator}!`) 
      process.exit();
  }
});


  
*/
const Discord = require('discord.js');
const bot = new Discord.Client();
console.log("By al7midy");
bot.on('ready', () => {
var x = bot.channels.get("566214566925697024");
if (x) x.join();
});
bot.login(process.env.BOT_TOKEN1);
//NTQxNjgxMTg0OTUwODQ1NDQw.Dzi_6Q.iyZrZ6Vz-gwhXKopVQdHfJqJDdk   الاول 
// توكني"NTU3NzE5NjAxMjQ5Nzc5NzE0.D3VKcg.-2D4yBBF17S_pQAmM9BBwsCQylg"
