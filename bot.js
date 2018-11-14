const Discord = require("discord.js")
const client = Discord.Client();
const.log = ("hi")



client.on('message', message => {
if(message.content.startsWith('c4')) {
if(message.author.id !== "314135031029170197") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});


client.login(process.env.BOT_TOKEN)
