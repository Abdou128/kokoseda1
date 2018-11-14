const Discord = require("discord.js")
const client = new Discord.Client();
console.log('hi');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});

const devs = ['314135031029170197']
const prefix = "1"



const randomWord = require("random-words")







var spam;

var phrases = ["thing1","another one","keep adding more","there's no limit"];

function startspam()
{
    console.log("Spam starting!")
    var server = client.guilds.get("495608433064673281");
    var channel = new discord.TextChannel(server,{"id":"503222054946996224"});
    spam = client.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{ // Sticking with randomwords.
            console.log(msg.content);
        });
 
    },305);
}

function stopspam()
{
    client.clearTimeout(spam);
    console.log("Spam Stopped.")
}

client.on("ready",()=>{
    console.log("Ready!");
})

client.on("message",msg=>{
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

client.on('message', message => {
if(message.content.startsWith(prefix + 's')) {
if(message.author.id !== "314135031029170197") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
if (message.content.startsWith('setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222054946996224";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222054946996224";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },8.64e+7);
})




client.login(process.env.BOT_TOKEN)
