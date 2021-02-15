const Discord = require('discord.js');
const db = require('narcos-db');
 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için **MESAJLARI YÖNET** yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`saas_${message.guild.id}`, 'aktif')
    message.channel.send(`sa-as sistemi başarı ile açıldı bundan sonra biri sa diyince as şeklinde cevap vereceğim kapatmak istersen m.sa-as kapat`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`saas_${message.guild.id}`, 'deaktif')
    message.channel.send(`sa-as sistemi başarı ile kapatıldı artık biri sa diyince as şeklinde cevap vermeyeceğim geri açmak istersen m.sa-as aç.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['saas'],
  permLevel: 0,
};
 
exports.help = {
  name: 'sa-as'
};