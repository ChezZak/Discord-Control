const { exec } = require('child_process');
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
name: "shutdown",
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

const ls = exec('shutdown -h', function (stdout) {
        console.log('Child Process STDOUT: ' + stdout);
      });

    let embed = new discord.MessageEmbed()
    .setTitle(`Ngủ Đông Máy Tính Chez_Zak`)
    .setDescription(`• Successful hibernate your PC ✅`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `:>,
      client.user.displayAvatarURL(),
    );
    
    message.channel .send(embed)
    
  
  }
}
