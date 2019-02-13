const Discord = require('discord.js');
const a = new Discord.Client();
const b = new Discord.Client();
const c = new Discord.Client();
const d = new Discord.Client();
const e = new Discord.Client();
const f = new Discord.Client();
const g = new Discord.Client();
const h = new Discord.Client();
const i = new Discord.Client();
const j = new Discord.Client();
const k = new Discord.Client();

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
e.on('ready', () => {
  console.log(`Logged in as 5!`);
});
f.on('ready', () => {
  console.log(`Logged in as 6!`);
});
g.on('ready', () => {
  console.log(`Logged in as 7!`);
});
h.on('ready', () => {
  console.log(`Logged in as 8!`);
});
i.on('ready', () => {
  console.log(`Logged in as 9!`);
});
j.on('ready', () => {
  console.log(`Logged in as 10!`);
});
k.on('ready', () => {
  console.log(`Logged in as 11!`);
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

e.on('ready', async () => {
let ReBeL = ["الحلو انا","5","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
e.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},63000);
});

f.on('ready', async () => {
let ReBeL = ["الحلو انا","6","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
f.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},64000);
});

g.on('ready', async () => {
let ReBeL = ["الحلو انا","7","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
g.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},65000);
});

h.on('ready', async () => {
let ReBeL = ["الحلو انا","8","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
h.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},66000);
});

i.on('ready', async () => {
let ReBeL = ["الحلو انا","9","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
i.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},67000);
});

j.on('ready', async () => {
let ReBeL = ["الحلو انا","10","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
j.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},68000);
});

k.on('ready', async () => {
let ReBeL = ["الحلو انا","11","نبي فلوس","احبك","اموت فيك","اعشقك"]
setInterval(() => {
k.channels.get("539466105694191616").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},69000);
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

e.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s5") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
f.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s6") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
g.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s7") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
h.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s8") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
i.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s9") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
j.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s10") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
k.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s11") {
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
e.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
f.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
g.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
h.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});

i.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
j.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != myID) return;

   message.channel.sendMessage(args.join("  "))
  }
});
k.on('message', message => {
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
//"NTQxMjI5NjQyMzQ3MTg0MTQ2.DzcbOA._eACuLci50dlwYOu_5OB33EbT9U" @الجلاد العظيم
//"NTQxMjMxMzYxMDI2MDMxNjE2.DzccrA.TzJUp6bgJKebtDSF7IJoERdpmeA" @dived sparo
//"NTQxMjMyMDkyMjE5MDQ3OTQ2.DzceEg.kuARL0_hRfsuKpFnVPdfszgfwrY"@the king
// "NTQxMjMzODE5NjA5NDY0ODUy.DzcfFA.r3BSVEFXX_8PykOyE7ndgyFeIjM" @id
//"NTQ0NzYxNTUwODEzMDAzNzc3.D0YHAA.mS1Mrtx8l6mfp7v_ck8tZzm4H90" @the XP
//"NTQ1MzMyMjk0NjIyMTE3ODg5.D0YIWQ.-o1L6-2KrbL1Jb8xhClYVkx2ma4" @تعال اشبعك حب
//"NTQ1MzMzNTY1NTI5Nzg0MzUw.D0YJZA.n5_AkMhbH-m3HKSn1P5MKObDR_4" @اشبعك دلال
a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);
c.login(process.env.BOT_TOKEN3);
d.login(process.env.BOT_TOKEN4);
e.login(process.env.BOT_TOKEN5);
f.login(process.env.BOT_TOKEN6);
g.login(process.env.BOT_TOKEN7);
h.login(process.env.BOT_TOKEN8);
i.login(process.env.BOT_TOKEN9);
j.login(process.env.BOT_TOKEN10);
k.login(process.env.BOT_TOKEN11);
