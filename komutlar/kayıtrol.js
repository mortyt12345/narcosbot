const discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Lütfen kullanıcının kaydı yapılınca verilecek rolü etiketler misin?')
db.set (`kayıtrol_${message.guild.id}`, rol.id)
 return message.channel.send(`Kayıt verilecek rol başarı ile <@&${rol.id}> olarak ayarlandı!`)


};

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 4,
aliases: ['kayıtrol']



};
exports.help = {
name: "kayıt-rol"



};