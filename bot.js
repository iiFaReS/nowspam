const Discord = require('discord.js');
const a = new Discord.Client();
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
a.on('ready', () => {
  console.log(`كل حاجه تمام ي باشا`);
});

a.on('ready', async () => {
let ReBeL = ["6","5","4","3","2","1"]
setInterval(() => {
a.channels.get("558417272188829716").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},40000);
});
//////////////////////////////////////
//////////////////////////////////////
a.login(process.env.BOT_TOKEN1);

//NTQxNjgxMTg0OTUwODQ1NDQw.Dzi_6Q.iyZrZ6Vz-gwhXKopVQdHfJqJDdk   الاول 
// توكني
