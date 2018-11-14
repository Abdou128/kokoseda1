const Discord = require("discord.js")
const bot = new Discord.Client();
console.log('hi');

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag} !`);
 
});

const devs = ['314135031029170197']
const prefix = "1"



const randomWord = require("random-words")



var spam;

var phrases = ["thing1","another one","keep adding more","there's no limit"];

function startspam()
{
    console.log("Spam starting!")
    var server = bot.guilds.get("510568893975232531");
    var chan = new discord.TextChannel(server,{"id":"510568894516166707"});
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
    if(msg.author.id == "314135031029170197")
    {
        if(msg.content.toLowerCase() == "1start")
        {
            startspam()
        }
        else if(msg.content.toLowerCase() == "1stop")
        {
            stopspam()
        }
    }
})




 

bot.on('message', message => {
if(message.content.startsWith(prefix + 's')) {
if(message.author.id !== "314135031029170197") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
if (message.content.startsWith('setavatar')) {
  bot.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



bot.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222054946996224";//ايدي الروم
    setInterval(()=>{
    bot.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

bot.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222054946996224";//ايدي الروم
    setInterval(()=>{
    bot.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },8.64e+7);
})




client.login(process.env.BOT_TOKEN)
