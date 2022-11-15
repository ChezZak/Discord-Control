const { exec } = require('child_process');
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
name: "sleep",
description: "`Show detailed stats of bot`",
category: "owner",
aliases: ["off"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != UR_ID){
    const noperms = new MessageEmbed()
    .setDescription("You are not my owner!")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 
  
  const ls = exec('rundll32.exe powrprof.dll, SetSuspendState Sleep', function (stdout) {
        console.log('Child Process STDOUT: ' + stdout);
      });

    let embed = new discord.MessageEmbed()
    .setTitle(`Sleep your PC 💤`)
    .setDescription(`• Successful sleep your PC `)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Cat Music`,
      client.user.displayAvatarURL(),
    );
    
    message.channel .send(embed)
    
  
  }
}
