const discord = require("discord.js");
const { exec } = require('child_process');

module.exports = {
  name: "restart",
  category: "info",
  description: "INVITE Cat Bot",
  run: async (client, message, args) => {
  
const ls = exec('shutdown -r -t 0', function (stdout) {
        console.log('Child Process STDOUT: ' + stdout);
      });

    let embed = new discord.MessageEmbed()
    .setTitle(`Restart your PC`)
    .setDescription(`• Successful restart your PC ✅`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `:>`,
      client.user.displayAvatarURL(),
    );
    
    message.channel .send(embed)
    
  
  }
}
