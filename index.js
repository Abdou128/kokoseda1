const discord = require("discord.js");
const randomWord = require("random-words")

const prefix = "1"
const devs = ['314135031029170197']
 
const bot = new discord.Client();

var spam;

var phrases = ["thing1","another one","keep adding more","there's no limit"];

function startspam()
{
    console.log("Spam starting!")
    var server = bot.guilds.get("495608433064673281");
    var chan = new discord.TextChannel(server,{"id":"503222054946996224"});
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



bot.login(process.env.BOT_TOKEN);
