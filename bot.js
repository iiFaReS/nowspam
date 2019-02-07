const Discord = require('discord.js');
const a = new Discord.Client();
const b = new Discord.Client();
const c = new Discord.Client();
const d = new Discord.Client();
const myID = '348586830305689600';
a.on('ready', () => {
  console.log(`Logged in as 1!`);
});
b.on('ready', () => {
  console.log(`Logged in as 2!`);
});
c.on('ready', () => {
  console.log(`Logged in as 3!`);
});
d.on('ready', () => {
  console.log(`Logged in as 4!`);
});

//////////////////////////////////////
a.on('ready', async () => {
let ReBeL = ["الحلو انا","1","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
a.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},59000);
});

b.on('ready', async () => {
let ReBeL = ["الحلو انا","2","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
b.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},60000);
});

c.on('ready', async () => {
let ReBeL = ["الحلو انا","3","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
c.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},61000);
});

d.on('ready', async () => {
let ReBeL = ["الحلو انا","4","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
d.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},62000);
});
/////////////////////////////////////
a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s1") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s2") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
c.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s3") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
d.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s4") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

////////////////
a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

c.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
d.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});


//"NTQxNjgxMTg0OTUwODQ1NDQw.Dzi_6Q.iyZrZ6Vz-gwhXKopVQdHfJqJDdk" @axTT        1
//"NTQxNjg1MjUyNzA0NDM2MjU0.DzjDeA.OO2zdX4In5bnS1RTuAHGfDMSQ6U" @FiBas!      2
//"NTQxNjg2MzM0MjUxNzI4OTEz.DzjEZw.Snbx6-fpdSYRIuSye291Cf26Jsk" @Quiet_Riot  3
//"NTQxNjg3Nzk0MzYwMTIzNDE1.DzjGAA.DD_h9mU-8aW2RXUcvuzLvfzj8OY" @the hell    4

a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);
c.login(process.env.BOT_TOKEN3);
d.login(process.env.BOT_TOKEN4);
