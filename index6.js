const discord = require("discord.js");
const randomWord = require("random-words")

const prefix = "6"
const adminprefix = "."
const devs = ['517409391570583574']
const bot = new discord.Client();
bot.login(process.env.BOT_TOKEN6);

var spam;

var phrases = ["thing1","another one","keep adding more","there's no limit"];

function startspam()
{
    console.log("Spam starting!")
    var server = bot.guilds.get("523491530015637513");
    var chan = new discord.TextChannel(server,{"id":"527489016694833152"});
    spam = bot.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{ // Sticking with randomwords.
            console.log(msg.content);
        });
 
    },305);
}

function stopspam()
{
    bot.clearTimeout(spam);
    console.log("Spam Stopped.")
}

bot.on("ready",()=>{
    console.log("Ready!");
})

bot.on("message",msg=>{
    if(msg.author.id == "517409391570583574")
    {
        if(msg.content.toLowerCase() == prefix + 'start')
        {
            startspam()
        }
        else if(msg.content.toLowerCase() == prefix + 'stop')
        {
            stopspam()
        }
    }
})


bot.on('message', message => {
if(message.content.startsWith(prefix + 's')) {
if(message.author.id !== "517409391570583574") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

 bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
                           
if (message.content.startsWith(prefix + 'setname')) {
  bot.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  bot.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


bot.on('ready', async() => {
    var server = bot.guilds.get("523491530015637513");
    var channel = new discord.TextChannel(server,{"id":"527489016694833152"});
    setInterval(()=>{
    bot.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

bot.on('ready', async() => {
    var server = bot.guilds.get("523491530015637513");
    var channel = new discord.TextChannel(server,{"id":"527489016694833152"});
    setInterval(()=>{
    bot.guilds.get(server).channels.get(channel).send('#rep <@517409391570583574>')
    },8.64e+7);
})
