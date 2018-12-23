const Discord = require('discord.js');
const client = new Discord.Client();
const a = new Discord.Client();
const b = new Discord.Client();
const c = new Discord.Client();
const d = new Discord.Client();
const e = new Discord.Client();
const f = new Discord.Client();
const g = new Discord.Client();
const h = new Discord.Client();
console.log("By al7midy");
const ownerid = '518024839953645588';


///////////////////////////////////////////
client.on("ready", () => {
let channel =     client.channels.get("515120221099393037")
setInterval(function() {
channel.send(`bY 7midy`);
}, 30)
})

a.on("ready", () => {
let channel =     a.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing `);
}, 30)
})

b.on("ready", () => {
let channel =     b.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing`);
}, 30)
})

c.on("ready", () => {
let channel =     c.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing`);
}, 30)
})

d.on("ready", () => {
let channel =     d.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing`);
}, 30)
})

e.on("ready", () => {
let channel =     e.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing`);
}, 30)
})

f.on("ready", () => {
let channel =     f.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing`);
}, 30)
})

g.on("ready", () => {
let channel =     g.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing`);
}, 30)
})

h.on("ready", () => {
let channel =     h.channels.get("515120221099393037")
setInterval(function() {
channel.send(`:slight_smile: no thing`);
}, 30)
})


//////////////////////////////////



client.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

c.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

d.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

e.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

f.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

g.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

h.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});


/////////////////////////////////voice/////////////////////////
client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

a.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

b.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

c.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

d.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

e.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

f.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

g.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});

h.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    		        if (message.author.id != ownerid) return;

    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        })
        .catch(console.log);
    } else {
    }
  }
});



client.login(process.env.BOT_TOKEN);
a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);
c.login(process.env.BOT_TOKEN3);
d.login(process.env.BOT_TOKEN4);
e.login(process.env.BOT_TOKEN5);
f.login(process.env.BOT_TOKEN6);
g.login(process.env.BOT_TOKEN7);
h.login(process.env.BOT_TOKEN8);
