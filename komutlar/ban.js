const Discord = require("discord.js");


exports.run = (client, message, args) => {


let member = message.mentions.users.first()
let sebep = args.slice(1).join(" ")
let guild = message.guild;
let kanal = 'kanalid'//Log Kanal İD Yazın

if(!member) return message.channel.send("> **Bir Üye Etıketle!**")



if(!sebep) return message.channel.send("> **Bir Sebep Gir!**")


guild.members.ban(member)

const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RANDOM')
.addField(`Banlanan Kullanıcı`,member)
.addField(`Yetkili`,message.author)
.addField(`Sebep`,sebep)
client.channels.cache.get(kanal).send(ban)


};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['yargı'], 
  permLevel: 2 
};
exports.help = {
  name: 'ban',
  description: 'Kullanıcıya Ban Atar', 
  usage: '>ban @user <sebep>' 
}