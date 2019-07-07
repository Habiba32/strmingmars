var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("..")
});



bot.login('NTIzODY4MzMwNDQ5MzA1NjE2.XQI1dg.3GmgcMetTgaNqdBH5D2MULLitkM'); 