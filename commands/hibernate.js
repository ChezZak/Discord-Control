const discord = require("discord.js");
const { exec } = require('child_process');

module.exports = {
  name: "hib",
  category: "info",
  description: "INVITE Cat Bot",
  run: async (client, message, args) => {
  
const ls = exec('shutdown -h', function (stdout) {
        console.log('Child Process STDOUT: ' + stdout);
      });

    let embed = new discord.MessageEmbed()
    .setTitle(`Hibernate your PC`)
    .setDescription(`• Successful hibernate your PC ✅`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `:>`,
      client.user.displayAvatarURL(),
    );
    
    message.channel .send(embed)
    
  
  }
}
